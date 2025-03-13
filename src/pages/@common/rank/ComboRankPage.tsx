import {useComboRankList} from "@/hooks/combo-rank/useComboRank.ts";
import Loading from "@pages/@common/common/Loading.tsx";
import {PageWrapper} from "@components/@common/wrapper/pageWrapper.style.ts";
import ContentHeader from "@components/@common/contentHeader/ContentHeader.tsx";
import {ComboRankResponse} from "@apis/combo-rank.ts";
import {
  EmptyMessage,
  MedalEmoji,
  MemberName,
  RankInfo,
  RankItem,
  RankNumber,
  RecordInfo
} from "@pages/@common/rank/ComboRankPage.style.ts";
import {GameType} from "@/types/game/game.ts";
import {useState} from "react";
import ComboRankFilter from "@components/rank/ComboRankFilter.tsx";


const medalIcons = {
  1: "🥇",
  2: "🥈",
  3: "🥉",
} as const;

const SIZE = 20;
const YEAR = 2025;

const ComboRankPage =() => {
  const [selectedGameType, setSelectedGameType] = useState<GameType>(GameType.REGULAR_SEASON);
  const {data, isLoading} = useComboRankList(SIZE, YEAR, selectedGameType)

  const handleGameTypeChange = (gameType: GameType) => {
    setSelectedGameType(gameType);
  };



  if (isLoading) return <Loading />;

  return (
      <PageWrapper>
        <ContentHeader title={"랭킹"}/>
        <ComboRankFilter selectedGameType={selectedGameType} onSelectGameType={handleGameTypeChange} />
        {data?.comboRankResponse && data.comboRankResponse.length > 0 ? (
            data?.comboRankResponse.map((rankInfo: ComboRankResponse) => (
                <RankItem>
                  {rankInfo.rank <= 3 ? (
                      <MedalEmoji>{medalIcons[rankInfo.rank as 1 | 2 | 3]}</MedalEmoji>
                  ) : (
                      <RankNumber>{rankInfo.rank}</RankNumber>
                  )}
                  <RankInfo>
                    <MemberName>{rankInfo.nickname}</MemberName>
                    <RecordInfo>{rankInfo.currentRecord} 콤보!</RecordInfo>
                  </RankInfo>
                </RankItem>
            ))
        ) : (
            <EmptyMessage>랭킹 데이터가 없습니다.</EmptyMessage>
        )}
      </PageWrapper>
  )
}

export default ComboRankPage;
