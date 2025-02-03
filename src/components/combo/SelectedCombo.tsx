import styled from "styled-components";
import theme from "@style/theme.style.ts";
import {useComboByGame, useDeleteCombo} from "@/hooks/useCombo.ts";
import {ComboStatusType, getStatusText} from "@constant/combo.ts";
import {PlayerImage} from "@components/player/PlayerImage.tsx";
import Loading from "@pages/@common/common/Loading.tsx";


const SelectedCombo = () => {

  const {data: combo, isLoading, error, comboDate} = useComboByGame();
  const {mutate: deleteCombo} = useDeleteCombo();

  if (isLoading) return <Loading/>;
  if (error || !combo) {

    return (
        <ComboWrapper>
          <TopSection>
            <SelectionText>선택한 날짜에 등록된 콤보가 없습니다.</SelectionText>
          </TopSection>
        </ComboWrapper>
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
              {combo.pa !== null && (
                  <StatItem>
                    <StatValue>{combo.pa}타수 {combo.hits}안타</StatValue>
                  </StatItem>
              )}
            </PlayerDetails>
          </PlayerInfo>
          <Stats>
          </Stats>
        </PlayerSection>
      </ComboWrapper>
  );
};

export default SelectedCombo;


const ComboWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 97.5%;
  background: ${theme.color.background};
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
`;

const SelectionText = styled.div`
  font: ${theme.font.subTitle};
  font-size: 2.6rem;
`;

const CancelButton = styled.button`
  padding: 1.5rem 3rem;
  background: ${theme.color.accent};
  color: #fff;
  border: none;
  border-radius: 1.5rem;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.3s ease;
  position: absolute;
  bottom: 1rem;
  right: 1rem;
`;

const PlayerSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const PlayerInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const PlayerDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const PlayerName = styled.div`
  font-size: 2.4rem;
  font-weight: bold;
  color: ${({theme}) => theme.color.primaryText || "#000"};
`;

const ComboStatus = styled.div<{ status: ComboStatusType }>`
  font-size: 2.0rem;
  color: ${({status, theme}) =>
      status === "PASS" ? theme.color.success || "#28a745"
          : status === "PENDING" ? theme.color.warning || "#ffc107"
              : theme.color.error || "#dc3545"};
`;

const Stats = styled.div`
  display: flex;
  gap: 2rem;
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StatValue = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
  color: ${({theme}) => theme.color.primaryText || "#000"};
`;
