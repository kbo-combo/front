import {useQuery} from "@tanstack/react-query";
import {ComboRankResponse, findAllComboRankByParam} from "@apis/combo-rank.ts";
import {GameType} from "@/types/game/game.ts";

export const useComboRankList = (size: number, year: number, gameType: GameType) => {
  const {data, error, isLoading} = useQuery({
    queryKey: [`combo-rank/${year}/${gameType}`, year, gameType],
    queryFn: () => findAllComboRankByParam(size, year, gameType),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  const filteredData = data?.comboRankResponse.filter((item: ComboRankResponse) => item.currentRecord !== 0) ?? [];

  return { data: filteredData, error, isLoading };
};
