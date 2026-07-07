import pg from "pg";

// One pooled Postgres client for the whole server. Neon's pooled endpoint
// (the `-pooler` host) handles connection multiplexing, so a small pool is
// plenty even on serverless.
let pool;

export function getPool() {
  if (!pool) {
    const config = useRuntimeConfig();
    const connectionString = config.private.DATABASE_URL;
    if (!connectionString) throw new Error("DATABASE_URL is not configured");
    pool = new pg.Pool({ connectionString, max: 3, idleTimeoutMillis: 10000 });
  }
  return pool;
}

// Map a `products` row to the item document shape the storefront expects (the
// same shape the old MongoDB seed produced), so no frontend change is needed.
export function rowToItem(row) {
  const images = Array.isArray(row.images) ? row.images : [];
  const price = Number(row.price);
  const oldPrice = row.old_price != null ? Number(row.old_price) : undefined;
  const item = {
    _id: String(row.id),
    slug: row.slug,
    name: row.name,
    price,
    oldPrice,
    preview: row.preview || "",
    description: row.description || "",
    image: images[0] || "",
    moreImages: images.slice(1),
    tags: [row.category],
    stock: row.stock ?? 0,
    variants: [],
    lifecycleStatus: "Active",
    reviewCount: row.review_count ?? 0,
    ratings: row.rating != null ? Number(row.rating) : 0,
  };
  if (oldPrice && price) {
    item.savingsAmount = Math.round((oldPrice - price) * 100) / 100;
    item.savingsPercentage = Math.round(((oldPrice - price) / oldPrice) * 100) + "%";
  }
  return item;
}
