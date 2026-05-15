// Re-encode every product JPG in public/ItemPics to WebP at quality 82.
// Update each Item document so .image and .moreImages point to the .webp files.
// Delete the original .jpg once the .webp is on disk.

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import mongoose from "mongoose";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const PIC_DIR = path.join(ROOT, "public", "ItemPics");

async function loadEnv() {
  const txt = await fs.readFile(path.join(ROOT, ".env"), "utf8");
  for (const raw of txt.split("\n")) {
    const line = raw.replace(/\r$/, "").trim();
    if (!line || line.startsWith("#")) continue;
    const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].trim();
  }
}

async function convertAll() {
  const files = (await fs.readdir(PIC_DIR)).filter((f) => f.endsWith(".jpg"));
  let totalJpg = 0;
  let totalWebp = 0;
  const mapping = {};
  for (const file of files) {
    const inPath = path.join(PIC_DIR, file);
    const outName = file.replace(/\.jpg$/, ".webp");
    const outPath = path.join(PIC_DIR, outName);
    const inStat = await fs.stat(inPath);
    totalJpg += inStat.size;
    await sharp(inPath)
      .resize({ width: 1200, withoutEnlargement: true })
      .webp({ quality: 82, effort: 5 })
      .toFile(outPath);
    const outStat = await fs.stat(outPath);
    totalWebp += outStat.size;
    mapping[file] = outName;
    console.log(
      `  ${file.padEnd(40)} ${(inStat.size / 1024).toFixed(0)}K → ${outName} ${(outStat.size / 1024).toFixed(0)}K`
    );
  }
  console.log(
    `\nTotals: ${(totalJpg / 1024 / 1024).toFixed(2)} MB → ${(totalWebp / 1024 / 1024).toFixed(2)} MB ` +
      `(${(((totalJpg - totalWebp) / totalJpg) * 100).toFixed(0)}% smaller)`
  );
  return mapping;
}

async function updateDB(mapping) {
  await mongoose.connect(process.env.DB_URI);
  const Item = mongoose.model(
    "Item",
    new mongoose.Schema({}, { strict: false })
  );
  const items = await Item.find({});
  let updated = 0;
  for (const item of items) {
    const newImage = mapping[item.image] || item.image;
    const newMore = (item.moreImages || []).map((f) => mapping[f] || f);
    if (
      newImage !== item.image ||
      JSON.stringify(newMore) !== JSON.stringify(item.moreImages)
    ) {
      await Item.updateOne(
        { _id: item._id },
        { $set: { image: newImage, moreImages: newMore } }
      );
      updated++;
    }
  }
  console.log(`Updated ${updated} item documents.`);
  await mongoose.disconnect();
}

async function deleteOriginals(mapping) {
  for (const oldName of Object.keys(mapping)) {
    await fs.unlink(path.join(PIC_DIR, oldName));
  }
  console.log(`Removed ${Object.keys(mapping).length} original JPGs.`);
}

(async () => {
  await loadEnv();
  console.log("Encoding to WebP...");
  const mapping = await convertAll();
  console.log("\nUpdating DB references...");
  await updateDB(mapping);
  console.log("\nDeleting original JPGs...");
  await deleteOriginals(mapping);
  console.log("\nDone.");
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
