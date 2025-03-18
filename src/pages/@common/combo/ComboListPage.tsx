import {PlayerImage} from "@components/player/PlayerImage.tsx";
import {getStatusText} from "@constant/combo.ts";
import {useInfiniteComboList} from "@/hooks/combo/useCombo.ts";
import Loading from "@pages/@common/common/Loading.tsx";
import ContentHeader from "@components/@common/contentHeader/ContentHeader.tsx";
import {PageWrapper} from "@components/@common/wrapper/pageWrapper.style.ts";
import {useInfiniteScroll} from "@/hooks/@common/usePage.ts";
import {
  ComboSection,
  ComboStatus,
  GameDate,
  GameInfoWrapper, HitterInfoWrapper, HitterRecord, LeftGroup,
  Message,
  PlayerInfoWrapper,
  PlayerName,
  TeamLogo,
  TeamLogosWrapper,
  VSLabel
} from "@pages/@common/combo/ComboListPage.style.ts";
import {teamLogos} from "@/types/team/team.ts";
import {GameType} from "@/types/game/game.ts";
import ComboListFilter from "@components/combo/list/ComboListFilter.tsx";
import {useState} from "react";
import MyCombo from "@components/combo/list/MyCombo.tsx";

const SIZE = 20;
const DEFAULT_YEAR = 2025;
const DEFAULT_GAME_TYPE = GameType.REGULAR_SEASON;

const ComboPage = () => {
  const [selectedGameType, setSelectedGameType] = useState<GameType>(DEFAULT_GAME_TYPE);
  const { data, isLoading, fetchNextPage, hasNextPage } = useInfiniteComboList(SIZE, selectedGameType);
  const { observerRef } = useInfiniteScroll({ hasNextPage, fetchNextPage });

  if (isLoading) return <Loading />;

  return (
      <PageWrapper>
        <ContentHeader title={"콤보 목록"}/>
        <ComboListFilter selectedGameType={selectedGameType}
                         onSelectGameType={setSelectedGameType}/>
        <MyCombo year={DEFAULT_YEAR} gameType={selectedGameType}/>
        {data?.length === 0 ? (
            <Message>등록된 콤보가 없습니다.</Message>
        ) : (
            data?.map((combo, index) => (
                <ComboSection key={combo.comboId}
                              ref={index === data.length - 1 ? observerRef : null}>
                  <LeftGroup>
                  <GameInfoWrapper>
                    <GameDate>{combo?.gameStartDate}</GameDate>
                    <TeamLogosWrapper>
                      <TeamLogo src={teamLogos[combo?.homeTeam]} alt={combo?.homeTeam}/>
                      <VSLabel>VS</VSLabel>
                      <TeamLogo src={teamLogos[combo?.awayTeam]} alt={combo?.awayTeam}/>
                    </TeamLogosWrapper>
                  </GameInfoWrapper>
                  <PlayerInfoWrapper>
                    <PlayerImage url={combo?.playerImageUrl}/>
                    <PlayerName>{combo?.playerName}</PlayerName>
                  </PlayerInfoWrapper>
                  </LeftGroup>
                  <HitterInfoWrapper>
                    {combo?.hitterGameRecord && (
                        <HitterRecord>{combo.hitterGameRecord.atBats}타수 {combo.hitterGameRecord.hits}안타</HitterRecord>
                    )}
                    <ComboStatus status={combo?.comboStatus}>
                      {getStatusText(combo?.comboStatus)}
                    </ComboStatus>
                  </HitterInfoWrapper>
                </ComboSection>
            ))
        )}
        {!hasNextPage && data?.length !== 0 && <Message>더 이상 콤보가 없습니다.</Message>}
      </PageWrapper>
  );
};

export default ComboPage;
