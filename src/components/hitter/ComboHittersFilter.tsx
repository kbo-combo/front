import {FilterButton, FilterTitle, FilterWrapper} from "@components/@common/filter/filter.style.ts";

type FilterOption = {
  key: string;
  value: string;
};

type ComboHittersFilterProps = {
  title: string;
  options: FilterOption[];
  selectedOption: string | null;
  onSelectOption: (option: string | null) => void;
};

const ComboHittersFilter = ({
                           title,
                           options,
                           selectedOption,
                           onSelectOption,
                         }: ComboHittersFilterProps) => {
  return (
      <FilterWrapper>
        <FilterTitle>{title}</FilterTitle>
        <FilterButton
            key="all"
            selected={selectedOption === null}
            onClick={() => onSelectOption(null)}
        >
          전체
        </FilterButton>
        {options.map(({ key, value }) => (
            <FilterButton
                key={key}
                selected={selectedOption === key}
                onClick={() => onSelectOption(selectedOption === key ? null : key)}
            >
              {value}
            </FilterButton>
        ))}
      </FilterWrapper>
  );
};

export default ComboHittersFilter;
