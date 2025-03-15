
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

export const addDay = (date: Date, days: number): Date => {
  return new Date(date.getTime() + days * 24 * 60 * 60 * 1000);
};

export const minusDay = (date: Date, days: number): Date => {
  return new Date(date.getTime() - days * 24 * 60 * 60 * 1000);
};

export const addMin = (date: Date, minutes: number): Date => {
  return new Date(date.getTime() + minutes * 60 * 1000);
};

export const minusMin = (date: Date, minutes: number): Date => {
  return new Date(date.getTime() - minutes * 60 * 1000);
};


export const createDateFromString = (date: string, time: string): Date => {
  const [year, month, day] = date.split("-").map(Number);
  const [hours, minutes] = time.split(":").map(Number);

  return new Date(year, month - 1, day, hours, minutes);
};
