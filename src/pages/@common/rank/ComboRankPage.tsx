import {useComboRankList} from "@/hooks/combo-rank/useComboRank.ts";
import Loading from "@pages/@common/common/Loading.tsx";
import {PageWrapper} from "@components/@common/wrapper/pageWrapper.style.ts";
import ContentHeader from "@components/@common/contentHeader/ContentHeader.tsx";
import {ComboRankResponse} from "@apis/combo-rank.ts";
import {
  CurrentRecord,
  CurrentRecordWrapper,
  EmptyMessage,
  MedalEmoji,
  MemberName,
  RankInfo,
  RankItem,
  RankNumber,
  RecordStats,
  ResultCount
} from "@pages/@common/rank/ComboRankPage.style.ts";
import {GameType} from "@/types/game/game.ts";
import {useState} from "react";
import {ComboSortType} from "@/types/combo/combo.ts";
import ComboRankFilterList from "@components/rank/ComboRankFilterList.tsx";


const fieldMap: Record<ComboSortType, keyof ComboRankResponse> = {
  CURRENT_RECORD: 'currentRecord',
  MAX_RECORD: 'maxRecord',
};

const medalIcons = {
  1: "🥇",
  2: "🥈",
  3: "🥉",
} as const;

const SIZE = 20;
const YEAR = 2025;
const DEFAULT_GAME_TYPE = GameType.REGULAR_SEASON;
const DEFAULT_SORT_TYPE: ComboSortType = "CURRENT_RECORD";

const ComboRankPage =() => {
  const [selectedGameType, setSelectedGameType] = useState<GameType>(DEFAULT_GAME_TYPE);
  const [selectSortType, setSelectSortType] = useState<ComboSortType>(DEFAULT_SORT_TYPE);
  const {data, isLoading} = useComboRankList(SIZE, YEAR, selectedGameType, selectSortType)

  const handleGameTypeChange = (gameType: GameType) => {
    setSelectedGameType(gameType);
  };

  const handleSortTypeChange = (sortType: ComboSortType) => {
    setSelectSortType(sortType);
  };

  if (isLoading) return <Loading />;

  return (
      <PageWrapper>
        <ContentHeader title={"랭킹"}/>
        <ComboRankFilterList
            selectedGameType={selectedGameType} onSelectGameType={handleGameTypeChange}
            selectedSortType={selectSortType} onSelectSortType={handleSortTypeChange}
        />
        {data.length > 0 ? (
            data.map((rankInfo: ComboRankResponse) => (
                <RankItem>
                  {rankInfo.rank <= 3 ? (
                      <MedalEmoji>{medalIcons[rankInfo.rank as 1 | 2 | 3]}</MedalEmoji>
                  ) : (
                      <RankNumber>{rankInfo.rank}</RankNumber>
                  )}
                  <RankInfo>
                    <MemberName>{rankInfo.nickname}</MemberName>
                    <CurrentRecordWrapper>
                      <CurrentRecord>{rankInfo[fieldMap[selectSortType]]} 콤보</CurrentRecord>
                      <RecordStats>
                        <ResultCount success={true}>성공 {rankInfo.successCount}</ResultCount>
                        <ResultCount success={false}>실패 {rankInfo.failCount}</ResultCount>
                      </RecordStats>
                    </CurrentRecordWrapper>
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
