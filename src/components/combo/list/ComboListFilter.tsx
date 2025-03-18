import {GameType, GameTypeLabels} from "@/types/game/game.ts";
import {FilterButton, FilterTitle, FilterWrapper} from "@components/@common/filter/filter.style.ts";

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
      <FilterWrapper style={{ marginLeft: '1.4rem'}}>
        <FilterTitle>게임 종류</FilterTitle>
        {gameTypes.map(({ key, label }) => (
            <FilterButton
                key={key}
                selected={selectedGameType === key}
                onClick={() => onSelectGameType(key)}
                style={{ fontSize: '1.8rem' }}
            >
              {label}
            </FilterButton>
        ))}
      </FilterWrapper>
  );
};

export default ComboListFilter;
