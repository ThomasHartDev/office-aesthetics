import { getPool, rowToItem } from "~/server/utils/pg";

// A single item by numeric id or slug, from Postgres.
export default defineEventHandler(async (event) => {
  const { id } = event.context.params;
  try {
    const byId = /^\d+$/.test(id);
    const { rows } = await getPool().query(
      byId
        ? "SELECT * FROM products WHERE id = $1"
        : "SELECT * FROM products WHERE slug = $1",
      [byId ? Number(id) : id]
    );
    if (!rows.length) {
      throw createError({ statusCode: 404, message: "Item not found" });
    }
    return rowToItem(rows[0]);
  } catch (error) {
    if (error.statusCode) throw error;
    console.error("[API] item [id]: ", error);
    throw createError({ statusCode: 500, message: "Server Error" });
  }
});
