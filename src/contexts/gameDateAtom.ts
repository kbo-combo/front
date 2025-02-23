import { atom } from "recoil";

export const gameDateAtom = atom<Date | null>({
  key: "gameDate",
  default: new Date(),
});
