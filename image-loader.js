export default function imageLoader({ src, width, quality }) {
  // Handle placeholder images
  if (src.startsWith("/placeholder.svg")) {
    return src
  }

  // Handle local images
  if (src.startsWith("/")) {
    return src
  }

  // Handle external images
  return src
}
