import {ComboWrapper, SelectionText, TopSection} from "@components/combo/SelectedCombo.style.tsx";

const SelectedComboError = ({ message }: { message: string }) => {
  return (
      <ComboWrapper>
        <TopSection>
          <SelectionText>{message}</SelectionText>
        </TopSection>
      </ComboWrapper>
  );
};

export default SelectedComboError
