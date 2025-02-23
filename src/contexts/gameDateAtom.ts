import { atom } from "recoil";

export const gameDateAtom = atom<Date>({
  key: "gameDate",
  default: new Date(),
});
