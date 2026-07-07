import { getPool, rowToReview } from "~/server/utils/pg";

// Reviews for one item, most-helpful then newest first, from Postgres.
export default defineEventHandler(async (event) => {
  const { id } = event.context.params;
  try {
    if (!/^\d+$/.test(id)) return [];
    const { rows } = await getPool().query(
      "SELECT * FROM reviews WHERE item_id = $1 ORDER BY thumbs_up DESC, created_at DESC",
      [Number(id)]
    );
    return rows.map(rowToReview);
  } catch (error) {
    console.error("[API] reviews [id]: ", error);
    throw createError({ statusCode: 500, message: "Server Error" });
  }
});
