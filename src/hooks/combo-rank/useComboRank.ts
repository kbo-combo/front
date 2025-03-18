import {useQuery} from "@tanstack/react-query";
import {
  ComboRankResponse,
  findAllComboRankByParam,
  findMemberComboRankDetail
} from "@apis/combo-rank.ts";
import {GameType} from "@/types/game/game.ts";
import {ComboSortType} from "@/types/combo/combo.ts";
import {useLoginContext} from "@/hooks/login.ts";

const filterConditions: Record<ComboSortType, (item: ComboRankResponse) => boolean> = {
  CURRENT_RECORD: (item) => item.currentRecord !== 0,
  MAX_RECORD: (item) => item.maxRecord !== 0,
};

export const useComboRankList = (size: number, year: number, gameType: GameType, comboSortType: ComboSortType) => {
  const {data, error, isLoading} = useQuery({
    queryKey: [`combo-rank/${year}/${gameType}`, year, gameType, comboSortType],
    queryFn: () => findAllComboRankByParam(size, year, gameType, comboSortType),
    staleTime: 1000 * 60,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  const filteredData =
      data?.comboRankResponse.filter(filterConditions[comboSortType]) ?? [];

  return {data: filteredData, error, isLoading};
};

export const useMyComboDetail = (year: number, gameType: GameType) => {
  const { memberId } = useLoginContext();

  if (memberId == null) {
    throw new Error("memberId is null");
  }

  const { data, error, isLoading } = useMemberComboDetail(memberId);
  const comboRankForYear = data?.find(item => item.year === year);
  let myCombo = null;
  if (comboRankForYear) {
    if (gameType === GameType.PRE_SEASON) {
      myCombo = comboRankForYear.comboRanks.preSeason;
    } else if (gameType === GameType.REGULAR_SEASON) {
      myCombo = comboRankForYear.comboRanks.regularSeason;
    } else if (gameType === GameType.POST_SEASON) {
      myCombo = comboRankForYear.comboRanks.postSeason;
    }
  }

  return { myCombo, error, isLoading };
};

const useMemberComboDetail = (memberId: number) => {
  const {data, error, isLoading} = useQuery({
    queryKey: [`combo-rank-my/${memberId}`, memberId],
    queryFn: () => findMemberComboRankDetail(memberId),
    staleTime: 0,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  return {data, error, isLoading};
};

