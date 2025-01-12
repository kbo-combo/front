import {
  FilterButton,
  FilterTitle,
  FilterWrapper
} from "@components/hitter/ComboHittersFilter.style.ts";

type ComboHittersFilterProps = {
  title: string;
  options: Record<string, string>;
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
        {Object.entries(options).map(([key, value]) => (
            <FilterButton
                key={key}
                isSelected={selectedOption === key}
                onClick={() => onSelectOption(selectedOption === key ? null : key)}
            >
              {value}
            </FilterButton>
        ))}
      </FilterWrapper>
  );
};

export default ComboHittersFilter;
