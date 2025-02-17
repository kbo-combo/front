import {useQuery} from "@tanstack/react-query";
import {
  findGameByDate,
  findGameByYearAndMonth,
  GameDateResponse,
  GameResponse
} from "@apis/game.ts";


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


export const useGameListByYearAndMonth =  (year: number, month: number) => {
  const {data, error, isLoading} = useQuery<GameDateResponse[], Error>({
    queryKey: [year, month],
    queryFn: () => findGameByYearAndMonth(year, month),
    staleTime: 60000,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  return { data, error, isLoading };
}
