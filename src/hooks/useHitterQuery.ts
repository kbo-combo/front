import {useQuery} from "@tanstack/react-query";
import {findAllHitter, HitterQueryRequest, HitterQueryResponse} from "@apis/player.ts";

export const useHitterQuery = (hitterRequest: HitterQueryRequest) => {
  const { data, error, isLoading } = useQuery<HitterQueryResponse[], Error>({
    queryKey: ['hitters', hitterRequest],
    queryFn: () => findAllHitter(hitterRequest),
    staleTime: 60000,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  return { data, error, isLoading };
};
