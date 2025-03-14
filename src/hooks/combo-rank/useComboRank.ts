import {useQuery} from "@tanstack/react-query";
import {findAllComboRankByParam} from "@apis/combo-rank.ts";

export const useComboRankList = (size: number, year: number) => {
  const {data, error, isLoading} = useQuery({
    queryKey: [`combo-rank/${year}`, year],
    queryFn: () => findAllComboRankByParam(size, year),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  return {data, error, isLoading};
};
