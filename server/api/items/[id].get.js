import Item from '~/server/models/Item.js';
import mongoose from 'mongoose';
import { connectDB } from '~/server/utils/dbConnect';
import { disconnectDB } from '~/server/utils/dbDisconnect';

export default defineEventHandler(async (event) => {
  const { id } = event.context.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw createError({ statusCode: 404, message: 'Item not found' });
  }
  await connectDB();
  try {
    const item = await Item.findById(id);
    await disconnectDB();
    if (!item) {
      throw createError({ statusCode: 404, message: 'Item not found' });
    }
    return item;
  } catch (error) {
    await disconnectDB();
    if (error.statusCode) throw error;
    console.error("[API] [id].get.js: Error fetching item:", error);
    throw createError({ statusCode: 500, message: 'Server Error' });
  }
});
