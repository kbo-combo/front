import {GameType, GameTypeLabels} from "@/types/game/game.ts";
import {FilterButton, FilterWrapper} from "@components/@common/filter/filter.style.ts";

type ComboListFilterProps = {
  selectedGameType: GameType;
  onSelectGameType: (gameType: GameType) => void;
};

const gameTypes = [
  { key: GameType.PRE_SEASON, label: GameTypeLabels[GameType.PRE_SEASON] },
  { key: GameType.REGULAR_SEASON, label: GameTypeLabels[GameType.REGULAR_SEASON] },
];

const ComboListFilter = ({ selectedGameType, onSelectGameType }: ComboListFilterProps) => {
  return (
      <FilterWrapper style={{ marginLeft: '0rem'}}>
        {gameTypes.map(({ key, label }) => (
            <FilterButton
                key={key}
                selected={selectedGameType === key}
                onClick={() => onSelectGameType(key)}
                style={{ fontSize: '2.2rem' }}
            >
              {label}
            </FilterButton>
        ))}
      </FilterWrapper>
  );
};

export default ComboListFilter;
