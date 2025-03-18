import {atomWithStorage} from "jotai/utils";

export const gameDateAtom = atomWithStorage<string>(
    "gameDate",
    new Date().toLocaleDateString("sv-SE"),
    {
      getItem: (key) => {
        return sessionStorage.getItem(key) ?? new Date().toLocaleDateString("sv-SE");
      },
      setItem: (key, value) => {
        sessionStorage.setItem(key, value);
      },
      removeItem: (key) => {
        sessionStorage.removeItem(key);
      },
    },
    { getOnInit: true }
);
