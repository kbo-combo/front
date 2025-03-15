import {atomWithStorage} from "jotai/utils";

export const gameDateAtom = atomWithStorage<Date | null>(
    "gameDate",
    null,
    {
      getItem: (key) => {
        const storedValue = sessionStorage.getItem(key);
        return storedValue ? new Date(storedValue) : null;
      },
      setItem: (key, value) => {
        sessionStorage.setItem(key, value ? value.toISOString() : "");
      },
      removeItem: (key) => {
        sessionStorage.removeItem(key);
      }
    },
    { getOnInit: true }
);
