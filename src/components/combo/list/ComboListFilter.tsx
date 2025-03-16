import {GameType, GameTypeLabels} from "@/types/game/game.ts";
import {FilterButton, FilterWrapper} from "@components/@common/filter/filter.style.ts";

type ComboListFilterProps = {
  selectedGameType: GameType;
  onSelectGameType: (gameType: GameType) => void;
};

const ComboListFilter = ({ selectedGameType, onSelectGameType }: ComboListFilterProps) => {
  return (
      <FilterWrapper style={{ marginLeft: '0rem'}}>
        <FilterButton
            selected={selectedGameType === GameType.PRE_SEASON}
            onClick={() => onSelectGameType(GameType.PRE_SEASON)}
            style={{fontSize: '2.2rem'}}
        >
          {GameTypeLabels[GameType.PRE_SEASON]}
        </FilterButton>
        <FilterButton
            selected={selectedGameType === GameType.REGULAR_SEASON}
            onClick={() => onSelectGameType(GameType.REGULAR_SEASON)}
            style={{fontSize: '2.2rem'}}
        >
          {GameTypeLabels[GameType.REGULAR_SEASON]}
        </FilterButton>
      </FilterWrapper>
  );
};

export default ComboListFilter;
