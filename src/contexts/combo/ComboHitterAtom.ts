import {atom} from "jotai";
import {TeamName} from "@constant/player.ts";


interface HitterComboState {
  gameId: number;
  homeTeam: TeamName;
  awayTeam: TeamName;
}

export const comboHitterAtom = atom<HitterComboState | null>();
