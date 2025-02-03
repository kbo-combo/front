// storage.ts

const StorageKeys = {
  SOCIAL_ID: "socialId",
};

export const setSession = (value: number) => {
  sessionStorage.setItem(StorageKeys.SOCIAL_ID, value.toString());
};

export const getSession = (): string | null => {
  return sessionStorage.getItem(StorageKeys.SOCIAL_ID);
};

export { StorageKeys };
