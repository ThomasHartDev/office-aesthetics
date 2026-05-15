// One-shot seed script:
//   1. download product images from Unsplash CDN to /public/ItemPics/
//   2. wipe existing Items + Reviews in MongoDB
//   3. insert the new catalog
//   4. insert varied reviews per item
//
// Run with: node scripts/seed-catalog.mjs

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import mongoose from "mongoose";
import sharp from "sharp";

import { catalog } from "./catalog-spec.mjs";
import { buildReview, makeRatingSampler } from "./review-content.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const PIC_DIR = path.join(ROOT, "public", "ItemPics");

// Read DB URI directly from .env so this is standalone.
async function loadEnv() {
  const txt = await fs.readFile(path.join(ROOT, ".env"), "utf8");
  for (const raw of txt.split("\n")) {
    const line = raw.replace(/\r$/, "").trim();
    if (!line || line.startsWith("#")) continue;
    const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].trim();
  }
}

// ─── image download ────────────────────────────────────────────────────
const UNSPLASH_PARAMS = "?w=1200&q=80&auto=format&fit=crop";

async function downloadAndEncode(url, dest) {
  const full = url + UNSPLASH_PARAMS;
  const res = await fetch(full);
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${full}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await sharp(buf)
    .resize({ width: 1200, withoutEnlargement: true })
    .webp({ quality: 82, effort: 5 })
    .toFile(dest);
  const stat = await fs.stat(dest);
  return stat.size;
}

async function downloadCatalogImages() {
  await fs.mkdir(PIC_DIR, { recursive: true });
  const results = [];
  for (const item of catalog) {
    item.imageFiles = [];
    for (let i = 0; i < item.images.length; i++) {
      const name = i === 0 ? `${item.slug}.webp` : `${item.slug}-${i + 1}.webp`;
      const dest = path.join(PIC_DIR, name);
      try {
        let bytes;
        try {
          const stat = await fs.stat(dest);
          bytes = stat.size;
        } catch {
          bytes = await downloadAndEncode(item.images[i], dest);
        }
        item.imageFiles.push(name);
        results.push({ slug: item.slug, idx: i, bytes });
      } catch (err) {
        console.error(`  ✗ ${item.slug} image ${i}: ${err.message}`);
      }
    }
  }
  return results;
}

// ─── DB ────────────────────────────────────────────────────────────────
const itemSchema = new mongoose.Schema({}, { strict: false, timestamps: true });
const reviewSchema = new mongoose.Schema({}, { strict: false, timestamps: true });

async function seedDB() {
  await mongoose.connect(process.env.DB_URI);
  const Item = mongoose.model("Item", itemSchema);
  const Review = mongoose.model("Review", reviewSchema);

  const wipeItems = await Item.deleteMany({});
  const wipeReviews = await Review.deleteMany({});
  console.log(`Wiped ${wipeItems.deletedCount} items, ${wipeReviews.deletedCount} reviews`);

  let totalReviews = 0;
  for (const item of catalog) {
    const doc = {
      name: item.name,
      price: item.price,
      oldPrice: item.oldPrice || undefined,
      preview: item.preview,
      description: item.description,
      image: item.imageFiles[0],
      moreImages: item.imageFiles.slice(1),
      tags: [item.tag],
      stock: item.stock,
      variants: [],
      lifecycleStatus: "Active",
      reviewCount: 0,
      ratings: 0,
    };
    if (doc.oldPrice && doc.price) {
      doc.savingsAmount = doc.oldPrice - doc.price;
      doc.savingsPercentage =
        ((doc.savingsAmount / doc.oldPrice) * 100).toFixed(0) + "%";
    }
    const saved = await Item.create(doc);

    // build reviews for this item
    if (item.reviewCount > 0) {
      // pick a per-item target average so different items feel different
      const targetAvg = pickTargetAvg(item);
      const sampler = makeRatingSampler(targetAvg);
      const reviews = [];
      for (let i = 0; i < item.reviewCount; i++) {
        const rating = sampler();
        reviews.push({ ...buildReview(rating), itemId: saved._id });
      }
      await Review.insertMany(reviews);
      const sum = reviews.reduce((s, r) => s + r.rating, 0);
      const avg = sum / reviews.length;
      await Item.findByIdAndUpdate(saved._id, {
        reviewCount: reviews.length,
        ratings: Math.round(avg * 10) / 10,
      });
      totalReviews += reviews.length;
    }
    console.log(`  + ${item.name.padEnd(40)} reviews=${item.reviewCount}`);
  }
  console.log(`\nSeeded ${catalog.length} items, ${totalReviews} reviews total.`);
  await mongoose.disconnect();
}

function pickTargetAvg(item) {
  // Vary per-item average so the storefront looks organic.
  // Higher-priced items skew slightly higher; one or two items are deliberately mediocre.
  const baselines = {
    "screen-cleaning-kit": 3.8,
    "wrist-rest-set": 4.0,
    "linen-conference-speaker": 4.2,
    "marble-side-table": 4.7,
    "ceramic-diffuser-set": 4.4,
    "stoneware-mug": 4.7,
    "hanging-pothos-pair": 4.3,
    "leather-document-tray": 4.0,
    "brass-wall-clock": 4.5,
  };
  if (baselines[item.slug]) return baselines[item.slug];
  if (item.price >= 800) return 4.7;
  if (item.price >= 300) return 4.6;
  if (item.price >= 100) return 4.5;
  return 4.4;
}

// ─── main ──────────────────────────────────────────────────────────────
(async () => {
  await loadEnv();
  console.log("Downloading images...");
  await downloadCatalogImages();
  console.log("\nSeeding DB...");
  await seedDB();
  console.log("\nDone.");
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
