import {useComboByGame, useDeleteCombo} from "@/hooks/useCombo.ts";
import {getStatusText} from "@constant/combo.ts";
import {PlayerImage} from "@components/player/PlayerImage.tsx";
import Loading from "@pages/@common/common/Loading.tsx";
import SelectedComboError from "@components/combo/SelectedComboError.tsx";
import {
  CancelButton,
  ComboStatus,
  ComboWrapper,
  PlayerDetails,
  PlayerInfo,
  PlayerName,
  PlayerSection,
  SelectionText,
  TopSection
} from "@components/combo/SelectedCombo.style.tsx";

const SelectedCombo = () => {
  const {data: combo, isLoading, error, comboDate} = useComboByGame();
  const {mutate: deleteCombo} = useDeleteCombo();

  if (isLoading) return <Loading/>;

  const now = new Date();
  const comboDateObj = new Date(comboDate);
  const isComboDateTooEarly = comboDateObj > new Date(now.setDate(now.getDate() + 2));

  if (error || !combo || isComboDateTooEarly) {
    return (
        <SelectedComboError
            message={isComboDateTooEarly ? '경기 시작 2일 전부터 선택 가능합니다.' : '콤보를 선택하지 않았습니다.'}
        />
    );
  }

  const handleCancel = () => {
    deleteCombo({comboId: combo.comboId, comboDate: comboDate});
  };


  return (
      <ComboWrapper>
        <TopSection>
          <SelectionText>내 선택</SelectionText>
          <CancelButton onClick={handleCancel}>취소</CancelButton>
        </TopSection>
        <PlayerSection>
          <PlayerInfo>
            <PlayerImage url={combo.playerImage}/>
            <PlayerDetails>
              <PlayerName>{combo.playerName}</PlayerName>
              <ComboStatus
                  status={combo.comboStatus}>{getStatusText(combo.comboStatus)}
              </ComboStatus>
            </PlayerDetails>
          </PlayerInfo>
        </PlayerSection>
      </ComboWrapper>
  );
};

export default SelectedCombo;
