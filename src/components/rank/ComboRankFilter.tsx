import {GameType} from "@/types/game/game.ts";
import {FilterButton, FilterWrapper} from "@components/@common/filter/filter.style.ts";

type ComboRankFilterProps = {
  selectedGameType: GameType;
  onSelectGameType: (gameType: GameType) => void;
};

const ComboRankFilter = ({ selectedGameType, onSelectGameType }: ComboRankFilterProps) => {
  return (
      <FilterWrapper style={{ marginLeft: '2.2rem'}}>
        <FilterButton
            selected={selectedGameType === GameType.PRE_SEASON}
            onClick={() => onSelectGameType(GameType.PRE_SEASON)}
            style={{fontSize: '2.2rem'}}
        >
          시범경기
        </FilterButton>
        <FilterButton
            selected={selectedGameType === GameType.REGULAR_SEASON}
            onClick={() => onSelectGameType(GameType.REGULAR_SEASON)}
            style={{fontSize: '2.2rem'}}
        >
          정규시즌
        </FilterButton>
      </FilterWrapper>
  );
};

export default ComboRankFilter;
