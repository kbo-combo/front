import {FilterButton, FilterWrapper} from "@components/@common/filter/filter.style.ts";
import {ComboSortType} from "@/types/combo/combo.ts";

type ComboRankFilterProps = {
  selectedSortType: ComboSortType;
  onSelectSortType: (sortType: ComboSortType) => void;
};

const ComboRankSortFilter = ({ selectedSortType, onSelectSortType }: ComboRankFilterProps) => {
  return (
      <FilterWrapper style={{ marginLeft: '0rem'}}>
        <FilterButton
            selected={selectedSortType === 'CURRENT_RECORD'}
            onClick={() => onSelectSortType('CURRENT_RECORD')}
            style={{fontSize: '2.2rem'}}
        >
          현재 연속 콤보
        </FilterButton>
        <FilterButton
            selected={selectedSortType === 'MAX_RECORD'}
            onClick={() => onSelectSortType('MAX_RECORD')}
            style={{fontSize: '2.2rem'}}
        >
          최다 연속 콤보
        </FilterButton>
      </FilterWrapper>
  );
};

export default ComboRankSortFilter;
