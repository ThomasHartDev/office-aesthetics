import { getPool, rowToItem } from "~/server/utils/pg";

// All storefront items, from Postgres. Returns the same document shape the
// frontend has always consumed, so no client change is needed.
export default defineEventHandler(async () => {
  try {
    const { rows } = await getPool().query(
      "SELECT * FROM products ORDER BY category, id"
    );
    return rows.map(rowToItem);
  } catch (error) {
    console.error("[API] items index: ", error);
    throw createError({ statusCode: 500, message: "Server Error" });
  }
});
