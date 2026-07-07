// Resolve a product image reference to an optimized src.
// - Unsplash URLs get resized + auto webp/avif params (raw Unsplash serves
//   ~1.6 MB JPEGs; this drops each to ~100 KB).
// - Other full URLs (Atlas CDN, already optimized) and absolute paths pass
//   through untouched.
// - Bare filenames fall back to the local /ItemPics/ folder for legacy data.
export function imgSrc(img, width = 800) {
  if (!img) return "";
  if (/images\.unsplash\.com/.test(img)) {
    const base = img.split("?")[0];
    return `${base}?auto=format&fit=crop&w=${width}&q=72`;
  }
  if (/^https?:\/\//.test(img) || img.startsWith("/")) return img;
  return `/ItemPics/${img}`;
}
