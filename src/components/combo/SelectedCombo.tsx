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
import {isAfterComboChangeTime, showCancelButton} from "@/function/combo/combo.ts";
import {addDay, toDateFormat} from "@/function/utils.ts";
import {useComboByGame, useDeleteCombo} from "@/hooks/combo/useCombo.ts";

const SelectedCombo = () => {
  const {data: combo, isLoading, error, comboDate} = useComboByGame();
  const {mutate: deleteCombo} = useDeleteCombo();

  if (isLoading) return <Loading/>;

  const now = new Date();
  const comboDateObj = new Date(comboDate);
  const isComboDateTooEarly = comboDateObj > addDay(now, 2);

  if (error || !combo || isComboDateTooEarly) {
    return (
      <div></div>
    );
  }

  const handleCancel = () => {
    deleteCombo({comboId: combo.comboId, comboDate: comboDate});
  };

  const gameStartDateTime = toDateFormat(combo.gameStartDate, combo.gameStartTime);
  const isShowCancelButton = showCancelButton(now, gameStartDateTime);


  return (
      <ComboWrapper>
        <TopSection>
          <SelectionText>내 선택</SelectionText>
          {
            isShowCancelButton && (
                  <CancelButton onClick={handleCancel} disabled={isAfterComboChangeTime(now, gameStartDateTime)}>취소</CancelButton>
              )
          }
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
