import {GameType, GameTypeLabels} from "@/types/game/game.ts";
import {FilterButton, FilterTitle, FilterWrapper} from "@components/@common/filter/filter.style.ts";

type ComboRankFilterProps = {
  selectedGameType: GameType;
  onSelectGameType: (gameType: GameType) => void;
  marginLeft: string,
  fontSize: string,
};

const gameTypes = [
  { key: GameType.PRE_SEASON, label: GameTypeLabels[GameType.PRE_SEASON] },
  { key: GameType.REGULAR_SEASON, label: GameTypeLabels[GameType.REGULAR_SEASON] },
];

const ComboRankGameTypeFilter = ({ selectedGameType, onSelectGameType, marginLeft, fontSize}: ComboRankFilterProps) => {
  return (
      <FilterWrapper style={{ marginLeft: marginLeft}}>
        <FilterTitle>게임 종류</FilterTitle>
        {gameTypes.map(({ key, label }) => (
            <FilterButton
                key={key}
                selected={selectedGameType === key}
                onClick={() => onSelectGameType(key)}
                style={{ fontSize: fontSize }}
            >
              {label}
            </FilterButton>
        ))}
      </FilterWrapper>
  );
};

export default ComboRankGameTypeFilter;
