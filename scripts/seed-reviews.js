/**
 * Seed realistic product reviews for all items in the database.
 *
 * Usage:
 *   node scripts/seed-reviews.js
 *
 * Requires MONGODB_URI in .env (same one the app uses).
 * Connects directly to MongoDB, creates reviews, then updates each
 * item's reviewCount and ratings fields to stay in sync.
 */

import mongoose from "mongoose";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env") });

// ── Schemas (lightweight copies so we don't need Nuxt runtime) ──────────────

const reviewSchema = new mongoose.Schema({
  itemId: { type: mongoose.Schema.Types.ObjectId, required: true, index: true },
  reviewerName: { type: String, required: true },
  email: { type: String, required: true },
  title: { type: String, required: true },
  comment: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  helpful: {
    thumbsUp: { type: Number, default: 0 },
    thumbsDown: { type: Number, default: 0 },
  },
  photos: { type: [String], default: [] },
  date: { type: Date, default: Date.now },
});

const itemSchema = new mongoose.Schema({}, { strict: false });

const Review =
  mongoose.models.Review || mongoose.model("Review", reviewSchema);
const Item = mongoose.models.Item || mongoose.model("Item", itemSchema);

// ── Review templates ────────────────────────────────────────────────────────
// Written to sound like real people. No em dashes, no corporate-speak.

const firstNames = [
  "Marcus", "Priya", "James", "Olivia", "Chen", "Sofia", "Daniel",
  "Rachel", "Andre", "Megan", "Kevin", "Laura", "Tyler", "Aisha",
  "Brandon", "Nicole", "Ryan", "Emily", "Jason", "Hannah", "David",
  "Sarah", "Mike", "Jen", "Alex", "Katie", "Chris", "Amy", "Matt",
  "Brooke", "Nathan", "Tara", "Derek", "Leah", "Greg", "Vanessa",
  "Carlos", "Heather", "Patrick", "Lisa", "Tony", "Samantha", "Eric",
  "Courtney", "Brian", "Angela", "Corey", "Dana", "Phil", "Steph",
];

const lastNames = [
  "Thornton", "Kapoor", "Mitchell", "Park", "Wei", "Reyes", "Carter",
  "Donovan", "Williams", "Okafor", "Singh", "Hernandez", "Foster",
  "Nakamura", "Brooks", "Kim", "Adams", "Rivera", "Cooper", "Sullivan",
  "Patel", "Johnson", "Liu", "Torres", "Bell", "Hayes", "Murphy",
  "Reed", "Coleman", "Stewart", "Phillips", "Long", "Ross", "Price",
  "Bennett", "Wood", "Barnes", "Howard", "Gray", "Watson", "Campbell",
  "Sanders", "Perry", "Powell", "Russell", "Flores", "Butler", "Ward",
];

// Pool of review snippets. Each has a title, comment, and a typical rating.
// These are meant to feel natural and varied.
const reviewPool = [
  // ── 5 star reviews ──
  {
    rating: 5,
    title: "Exactly what I was looking for",
    comment:
      "Took a chance on this and it completely delivered. The build quality is solid and it looks great in my office. Packaging was really well done too.",
  },
  {
    rating: 5,
    title: "Worth every penny",
    comment:
      "I compared a bunch of options before pulling the trigger on this one. Glad I did. The materials feel premium and it fits my space perfectly.",
  },
  {
    rating: 5,
    title: "Super impressed",
    comment:
      "Way better than I expected for the price. Setup was easy, maybe 20 minutes total. My coworkers keep asking where I got it.",
  },
  {
    rating: 5,
    title: "Solid purchase",
    comment:
      "Been using this daily for about two months now and it still looks and feels brand new. Really happy with this one.",
  },
  {
    rating: 5,
    title: "Great addition to my setup",
    comment:
      "This was the last piece I needed for my home office and it ties everything together. The quality is noticeably better than the cheaper alternatives I had before.",
  },
  {
    rating: 5,
    title: "Love it",
    comment:
      "Clean design, sturdy construction, and the color is spot on with the product photos. No complaints at all.",
  },
  {
    rating: 5,
    title: "10/10 would buy again",
    comment:
      "Shipped fast, arrived in perfect condition, and looks amazing on my desk. Already recommended it to a friend.",
  },
  {
    rating: 5,
    title: "Better than expected",
    comment:
      "I was a little skeptical ordering furniture online but this thing is legit. Heavy duty, well built, and the finish is flawless.",
  },
  {
    rating: 5,
    title: "Perfect for working from home",
    comment:
      "I work long hours from home and needed something that was comfortable and looked professional on video calls. This checks both boxes.",
  },
  {
    rating: 5,
    title: "My favorite purchase this year",
    comment:
      "Upgraded from a basic setup and the difference is night and day. Everything about this feels considered and well made.",
  },
  {
    rating: 5,
    title: "Really well made",
    comment:
      "You can tell this is quality stuff as soon as you take it out of the box. Instructions were clear and it went together without any issues.",
  },
  {
    rating: 5,
    title: "Nailed it",
    comment:
      "Exactly as described, arrived on time, and the quality speaks for itself. This is how online shopping should work.",
  },
  {
    rating: 5,
    title: "So glad I found this",
    comment:
      "Was about to settle for something from a big box store but decided to spend a little more. Absolutely worth the upgrade. The attention to detail is obvious.",
  },
  {
    rating: 5,
    title: "Looks even better in person",
    comment:
      "Photos don't do it justice honestly. The materials are high end and the design is really clean. Gets compliments every time someone sees my office.",
  },

  // ── 4 star reviews ──
  {
    rating: 4,
    title: "Really nice, minor issue",
    comment:
      "Overall super happy with this. Only thing is one of the pieces was slightly scratched during shipping but it's on the underside so not a big deal.",
  },
  {
    rating: 4,
    title: "Good quality, slow shipping",
    comment:
      "The product itself is excellent. Took a little longer to arrive than I expected but it was worth the wait. Looks great in my office.",
  },
  {
    rating: 4,
    title: "Almost perfect",
    comment:
      "Love the design and the build quality. Wish it came in a darker color option but the one I got still works well with my setup.",
  },
  {
    rating: 4,
    title: "Solid, would recommend",
    comment:
      "Very happy overall. Assembly instructions could have been a little clearer but I figured it out pretty quickly. End result looks fantastic.",
  },
  {
    rating: 4,
    title: "Great product, runs a bit small",
    comment:
      "Quality is top notch but I'd say it runs slightly smaller than the dimensions suggest. Still works for my space, just something to be aware of.",
  },
  {
    rating: 4,
    title: "Happy with it",
    comment:
      "Does exactly what I needed. Sturdy, looks clean, and was fairly easy to put together. The only reason it's not 5 stars is the price is a bit steep.",
  },
  {
    rating: 4,
    title: "Nice upgrade",
    comment:
      "Definite step up from what I had before. The finish is smooth and the construction feels durable. Could use a few more color options though.",
  },
  {
    rating: 4,
    title: "Pleasantly surprised",
    comment:
      "Wasn't sure what to expect from a brand I hadn't heard of but this is legitimately well made. Knocked off one star because the box arrived pretty beaten up, but the product inside was fine.",
  },

  // ── 3 star reviews ──
  {
    rating: 3,
    title: "Decent but not blown away",
    comment:
      "It looks nice and does the job but for the price I was expecting slightly better materials. The surface scratches pretty easily. Not bad, just not amazing.",
  },
  {
    rating: 3,
    title: "Fine for the price",
    comment:
      "Serves its purpose. Nothing wrong with it per se, but it doesn't feel as premium as the photos suggest. Still functional and looks okay in my room.",
  },
  {
    rating: 3,
    title: "Mixed feelings",
    comment:
      "The design is really nice but the assembly was a pain. One of the pre-drilled holes didn't line up so I had to improvise. End result is fine though.",
  },

  // ── 2 star reviews ──
  {
    rating: 2,
    title: "Disappointed",
    comment:
      "Expected more for what I paid. The color looked different on my screen and the material feels cheaper in person. Might return it.",
  },

  // ── 1 star reviews ──
  {
    rating: 1,
    title: "Arrived damaged",
    comment:
      "Came with a big dent on the side. Already reached out to support about a replacement. Hopefully the next one is better because I like the design.",
  },
];

// ── Helpers ─────────────────────────────────────────────────────────────────

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomDate(daysBack = 180) {
  const now = Date.now();
  const offset = Math.floor(Math.random() * daysBack * 24 * 60 * 60 * 1000);
  return new Date(now - offset);
}

function generateEmail(first, last) {
  const domains = [
    "gmail.com",
    "yahoo.com",
    "outlook.com",
    "hotmail.com",
    "icloud.com",
    "protonmail.com",
  ];
  const num = randomInt(1, 99);
  return `${first.toLowerCase()}${last.toLowerCase()}${num}@${pick(domains)}`;
}

function buildReviews(itemId, count) {
  const used = new Set();
  const out = [];

  for (let i = 0; i < count; i++) {
    let template;
    // Weighted distribution: mostly 4-5 stars
    const roll = Math.random();
    let targetRating;
    if (roll < 0.45) targetRating = 5;
    else if (roll < 0.8) targetRating = 4;
    else if (roll < 0.92) targetRating = 3;
    else if (roll < 0.97) targetRating = 2;
    else targetRating = 1;

    const candidates = reviewPool.filter(
      (r) => r.rating === targetRating && !used.has(r.title)
    );
    if (candidates.length === 0) {
      template = reviewPool.find(
        (r) => r.rating === targetRating && !used.has(r.title)
      );
      if (!template)
        template = pick(reviewPool.filter((r) => r.rating === targetRating));
      if (!template) template = pick(reviewPool);
    } else {
      template = pick(candidates);
    }
    used.add(template.title);

    const first = pick(firstNames);
    const last = pick(lastNames);

    out.push({
      itemId,
      reviewerName: `${first} ${last}`,
      email: generateEmail(first, last),
      title: template.title,
      comment: template.comment,
      rating: template.rating,
      helpful: {
        thumbsUp: randomInt(0, 18),
        thumbsDown: randomInt(0, 3),
      },
      photos: [],
      date: randomDate(),
    });
  }

  return out;
}

// ── Main ────────────────────────────────────────────────────────────────────

async function main() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error("MONGODB_URI not found in .env");
    process.exit(1);
  }

  await mongoose.connect(uri);
  console.log("Connected to MongoDB");

  const items = await Item.find({}, "_id name").lean();
  console.log(`Found ${items.length} items`);

  if (!items.length) {
    console.log("No items in the database. Nothing to seed.");
    await mongoose.disconnect();
    return;
  }

  let totalCreated = 0;

  for (const item of items) {
    // Check if this item already has reviews
    const existingCount = await Review.countDocuments({ itemId: item._id });
    if (existingCount > 0) {
      console.log(
        `  Skipping "${item.name || item._id}" (already has ${existingCount} reviews)`
      );
      continue;
    }

    const count = randomInt(8, 18);
    const reviews = buildReviews(item._id, count);

    await Review.insertMany(reviews);

    // Update item rating stats
    const allReviews = await Review.find({ itemId: item._id });
    const reviewCount = allReviews.length;
    const totalRating = allReviews.reduce((sum, r) => sum + r.rating, 0);
    const averageRating = reviewCount > 0 ? totalRating / reviewCount : 0;

    await Item.findByIdAndUpdate(item._id, {
      reviewCount,
      ratings: averageRating,
    });

    console.log(
      `  Seeded ${count} reviews for "${item.name || item._id}" (avg ${averageRating.toFixed(1)})`
    );
    totalCreated += count;
  }

  console.log(`\nDone. Created ${totalCreated} reviews across ${items.length} items.`);
  await mongoose.disconnect();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
