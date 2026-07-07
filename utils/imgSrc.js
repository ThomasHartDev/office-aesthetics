// Resolve a product image reference to a usable src. Full URLs (Atlas CDN,
// Unsplash) and absolute paths pass through untouched; bare filenames fall back
// to the local /ItemPics/ folder for legacy data.
export function imgSrc(img) {
  if (!img) return "";
  if (/^https?:\/\//.test(img) || img.startsWith("/")) return img;
  return `/ItemPics/${img}`;
}
