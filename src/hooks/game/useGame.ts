import {useQuery} from "@tanstack/react-query";
import {
  findGameByDate,
  findGameByYearAndMonth,
  GameDateResponse,
  GameResponse
} from "@apis/game.ts";
import {gameDateAtom} from "@/contexts/gameDateAtom.ts";
import {useAtom} from "jotai/react/useAtom";

export const useGameDate = () => {
  const [selectedDate, setSelectedDate] = useAtom(gameDateAtom);

  return {
    selectedDate,
    formattedDate: selectedDate.toLocaleDateString("sv-SE"),
    setSelectedDate,
  };
};

export const useGameList = (gameDate: string) => {
  const { data, error, isLoading } = useQuery<GameResponse[], Error>({
    queryKey: [gameDate],
    queryFn: () => findGameByDate(gameDate),
    staleTime: 1000 * 60,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  return { data, error, isLoading };
};


export const useGameListByYearAndMonth = (year: number, month: number) => {
  const { data, error, isLoading } = useQuery<GameDateResponse[], Error>({
    queryKey: ["gameDates", year, month],
    queryFn: () => findGameByYearAndMonth(year, month),
    staleTime: 1000 * 60 * 30,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  const gameDateSet = new Set(data?.map(({ gameDate }) => gameDate) ?? []);
  const daysInMonth = new Date(year, month, 0).getDate();
  const gameDateList: GameDateList[] = Array.from({ length: daysInMonth }, (_, i) => {
    const date = `${year}-${String(month).padStart(2, "0")}-${String(i + 1).padStart(2, "0")}`;
    return {
      date,
      hasGame: gameDateSet.has(date),
    };
  });

  return { gameDateList: gameDateList ?? [], error, isLoading };
};

export interface GameDateList {
  date: string;
  hasGame: boolean;
}

