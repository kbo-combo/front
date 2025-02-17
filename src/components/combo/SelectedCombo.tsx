import {useComboByGame, useDeleteCombo} from "@/hooks/useCombo.ts";
import {getStatusText} from "@constant/combo.ts";
import {PlayerImage} from "@components/player/PlayerImage.tsx";
import Loading from "@pages/@common/common/Loading.tsx";
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
import {canNotCancelCombo} from "@/function/combo/combo.ts";
import {toDateFormat} from "@/function/utils.ts";

const SelectedCombo = () => {
  const {data: combo, isLoading, error, comboDate} = useComboByGame();
  const {mutate: deleteCombo} = useDeleteCombo();

  if (isLoading) return <Loading/>;

  const now = new Date();
  const comboDateObj = new Date(comboDate);
  const isComboDateTooEarly = comboDateObj > new Date(now.setDate(now.getDate() + 2));

  if (error || !combo || isComboDateTooEarly) {
    return (
      <div></div>
    );
  }

  const handleCancel = () => {
    deleteCombo({comboId: combo.comboId, comboDate: comboDate});
  };

  const gameStartDateTime = toDateFormat(combo.gameStartDate, combo.gameStartTime);

  return (
      <ComboWrapper>
        <TopSection>
          <SelectionText>내 선택</SelectionText>
          <CancelButton onClick={handleCancel} disabled={canNotCancelCombo(now, gameStartDateTime)}>취소</CancelButton>
        </TopSection>
        <PlayerSection>
          <PlayerInfo>
            <PlayerImage url={combo.playerImageUrl}/>
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
