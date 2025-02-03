
export function getPlayerImageUrl(url: string | null, defaultImage: string): string {
  if (!url) return defaultImage;
  return url.startsWith("http") ? url : `https://${url}`;
}
