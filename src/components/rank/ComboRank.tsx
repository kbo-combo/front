import {useComboRankList} from "@/hooks/combo-rank/useComboRank.ts";
import {GameTypes} from "@/types/game/game.ts";


const SIZE = 20;
const YEAR = 2025;

const ComboRank =() => {
  useComboRankList(SIZE, YEAR, GameTypes.REGULAR_SEASON)
}

export default ComboRank;
