import {FilterButton, FilterWrapper} from "@components/@common/filter/filter.style.ts";
import {ComboSortType} from "@/types/combo/combo.ts";

const sortTypes: { key: ComboSortType; label: string }[] = [
  { key: 'CURRENT_RECORD', label: '현재 연속 콤보' },
  { key: 'MAX_RECORD', label: '최다 연속 콤보' },
];

type ComboRankFilterProps = {
  selectedSortType: ComboSortType;
  onSelectSortType: (sortType: ComboSortType) => void;
  marginLeft: string,
  fontSize: string,
};

const ComboRankSortFilter = ({ selectedSortType, onSelectSortType, marginLeft, fontSize }: ComboRankFilterProps) => {
  return (
      <FilterWrapper style={{ marginLeft: marginLeft}}>
        {sortTypes.map(({ key, label }) => (
            <FilterButton
                key={key}
                selected={selectedSortType === key}
                onClick={() => onSelectSortType(key)}
                style={{ fontSize: fontSize }}
            >
              {label}
            </FilterButton>
        ))}
      </FilterWrapper>
  );
};

export default ComboRankSortFilter;
