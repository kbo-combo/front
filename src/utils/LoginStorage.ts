// LoginStorage.ts

const StorageKeys = {
  LOGIN_KEY: "loginKey",
};

export const setSession = () => {
  localStorage.setItem(StorageKeys.LOGIN_KEY, "anyValue");
};

export const deleteSession = () => {
  localStorage.removeItem(StorageKeys.LOGIN_KEY);
};


export const getSession = (): string | null => {
  return localStorage.getItem(StorageKeys.LOGIN_KEY);
};

export { StorageKeys };
