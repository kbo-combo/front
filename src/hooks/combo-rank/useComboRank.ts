import {useQuery} from "@tanstack/react-query";
import {
  ComboRankResponse,
  findAllComboRankByParam,
  findMemberComboRankDetail
} from "@apis/combo-rank.ts";
import {GameType} from "@/types/game/game.ts";
import {ComboSortType} from "@/types/combo/combo.ts";
import {useLoginContext} from "@/hooks/login.ts";

export const useComboRankList = (size: number, year: number, gameType: GameType, comboSortType: ComboSortType) => {
  const {data, error, isLoading} = useQuery({
    queryKey: [`combo-rank/${year}/${gameType}`, year, gameType, comboSortType],
    queryFn: () => findAllComboRankByParam(size, year, gameType, comboSortType),
    staleTime: 1000 * 60,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  const filteredData = data?.comboRankResponse.filter((item: ComboRankResponse) => item.currentRecord !== 0) ?? [];

  return {data: filteredData, error, isLoading};
};

export const useMyComboDetail = (year: number, gameType: GameType) => {
  const { memberId } = useLoginContext();

  console.log("hello")

  if (memberId == null) {
    console.log("error")
    throw new Error("memberId is null. Are you logged in?");
  }

  const { data, error, isLoading } = useMemberComboDetail(memberId);

  let myCombo = null;
  if (gameType === 'PRE_SEASON') {
    console.log("pre");
    myCombo = data?.comboRanks?.preSeason;
  } else if (gameType === 'REGULAR_SEASON') {
    console.log("regualr");
    myCombo = data?.comboRanks?.regularSeason;
  } else if (gameType === 'POST_SEASON') {
    myCombo = data?.comboRanks?.postSeason;
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

