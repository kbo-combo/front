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
    undefined,
    { getOnInit: true }
);
