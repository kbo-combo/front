import {useQuery} from "@tanstack/react-query";
import {
  findGameByDate,
  findGameByYearAndMonth,
  GameDateResponse,
  GameResponse
} from "@apis/game.ts";
import {useAtom} from "jotai";
import {gameDateAtom} from "@/contexts/gameDateAtom.ts";

export const useGameDate = () => {
  const [dateStr, setDateStr] = useAtom(gameDateAtom);

  const dateObj = new Date(dateStr);

  const setSelectedDate = (date: Date) => {
    const formatted = date.toLocaleDateString("sv-SE");
    setDateStr(formatted);
  };

  return {
    selectedDate: dateObj,
    formattedDate: dateStr,
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

  const gameDateSet = new Set((data ?? []).map(d => d.gameDate));

  const daysInMonth = new Date(year, month + 1, 0).getDate();
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

