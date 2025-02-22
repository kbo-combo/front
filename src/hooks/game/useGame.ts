import {useContext} from "react";
import {GameDateContext} from "@/contexts/GameDateContext.tsx";
import {useQuery} from "@tanstack/react-query";
import {
  findGameByDate,
  findGameByYearAndMonth,
  GameDateResponse,
  GameResponse
} from "@apis/game.ts";

export const useGameDate = () => {
  const context = useContext(GameDateContext);
  if (!context) {
    throw new Error("useGameDate must be used within a GameDateProvider");
  }
  const {selectedDate, ...rest} = context;

  return {
    selectedDate,
    formattedDate: selectedDate.toLocaleDateString("sv-SE"),
    ...rest,
  };
};

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
