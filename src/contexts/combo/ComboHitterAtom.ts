import {TeamName} from "@constant/player.ts";
import {atomWithStorage} from "jotai/vanilla/utils";

interface HitterComboState {
  gameId: number;
  homeTeam: TeamName;
  awayTeam: TeamName;
}

export const comboHitterAtom = atomWithStorage<HitterComboState | null>(
    "selectGame",
    null,
    {
      getItem: (key) => {
        const stored = sessionStorage.getItem(key);
        return stored ? JSON.parse(stored) : null;
      },
      setItem: (key, value) => {
        sessionStorage.setItem(key, JSON.stringify(value));
      },
      removeItem: (key) => {
        sessionStorage.removeItem(key);
      },
    },
    { getOnInit: true }
);
