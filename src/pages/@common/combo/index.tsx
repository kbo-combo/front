import {useCombinedComboList} from "@/hooks/combo/useComboList.ts";
import {
  ComboStatus, ComboWrapper,
  PlayerDetails,
  PlayerInfo,
  PlayerName,
  PlayerSection,
} from "@components/combo/SelectedCombo.style.tsx";
import {PlayerImage} from "@components/player/PlayerImage.tsx";
import {getStatusText} from "@constant/combo.ts";
import styled from "styled-components";

// CSS 변경
// 무한 스크롤 추가
const ComboPage = () => {
  const { combinedList, isLoading } = useCombinedComboList(2025, 2);

  if (isLoading) return <p>Loading...</p>;

  return (
      <ComboWrapper>
        {combinedList.map(({ date, hasGame, combos }) => (
            <DateSection key={date}>
              <DateTitle>{date} {hasGame ? "Game 존재" : "Game 없음"}</DateTitle>

              {combos.length > 0 ? (
                  combos.map((combo) => (
                      <PlayerSection key={combo.comboId}>
                        <PlayerInfo>
                          <PlayerImage url={combo.playerImageUrl} />
                          <PlayerDetails>
                            <PlayerName>{combo.playerName}</PlayerName>
                            <ComboStatus status={combo.comboStatus}>
                              {getStatusText(combo.comboStatus)}
                            </ComboStatus>
                          </PlayerDetails>
                        </PlayerInfo>
                      </PlayerSection>
                  ))
              ) : (
                  <NoComboText>미선택</NoComboText>
              )}
            </DateSection>
        ))}
      </ComboWrapper>
  );
};


export default ComboPage;

const DateSection = styled.div`
  margin-bottom: 16px;
`;

const DateTitle = styled.h3`
  font-size: 16px;
  margin-bottom: 8px;
`;

const NoComboText = styled.p`
  font-size: 14px;
  color: gray;
`;
