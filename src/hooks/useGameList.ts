import {useQuery} from "@tanstack/react-query";
import {findGameByDate, GameResponse} from "@apis/game.ts";


export const useGameList = (gameDate: string) => {
  const { data, error, isLoading } = useQuery<GameResponse[], Error>({
    queryKey: [gameDate],
    queryFn: () => findGameByDate(gameDate),
    staleTime: 600,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  return { data, error, isLoading };
};
