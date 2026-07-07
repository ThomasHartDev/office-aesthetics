import { getPool, rowToReview } from "~/server/utils/pg";

// All reviews, optionally filtered by ?itemId, from Postgres.
export default defineEventHandler(async (event) => {
  try {
    const { itemId } = getQuery(event);
    const pool = getPool();
    const { rows } = itemId
      ? await pool.query(
          "SELECT * FROM reviews WHERE item_id = $1 ORDER BY thumbs_up DESC, created_at DESC",
          [Number(itemId)]
        )
      : await pool.query("SELECT * FROM reviews ORDER BY created_at DESC LIMIT 500");
    return rows.map(rowToReview);
  } catch (error) {
    console.error("[API] reviews index: ", error);
    throw createError({ statusCode: 500, message: "Server Error" });
  }
});
