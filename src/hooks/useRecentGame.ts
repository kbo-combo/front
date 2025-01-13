import {useQuery} from "@tanstack/react-query";
import {findRecentGame, GameResponse} from "@apis/game.ts";


export const useRecentGame = () => {
  const { data, error, isLoading } = useQuery<GameResponse[], Error>({
    queryKey: [],
    queryFn: () => findRecentGame(),
    staleTime: 600,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  return { data, error, isLoading };
};
