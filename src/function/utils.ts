
export function getPlayerImageUrl(url: string | null, defaultImage: string): string {
  if (!url) return defaultImage;
  return url.startsWith("http") ? url : `https://${url}`;
}

export const toDateFormat = (localDate: string, localTime: string): Date => {
  const [year, month, day] = localDate.split("-").map(Number);
  const [hour, minute, second] = localTime.split(":").map(Number);

  return new Date(year, month - 1, day, hour, minute, second);
};

export const sliceSecond = (localTime: string): string => {
  return localTime.split(":").slice(0, 2).join(":")
};
