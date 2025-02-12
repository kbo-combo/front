// LoginStorage.ts

const StorageKeys = {
  LOGIN_KEY: "loginKey",
};

export const setSession = () => {
  localStorage.setItem(StorageKeys.LOGIN_KEY, "anyValue");
};

export const getSession = (): string | null => {
  return localStorage.getItem(StorageKeys.LOGIN_KEY);
};

export { StorageKeys };
