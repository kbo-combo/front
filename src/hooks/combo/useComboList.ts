import {useMemo} from "react";
import {useGameListByYearAndMonth} from "@/hooks/game/useGame.ts";
import {ComboListResponse} from "@apis/combo.ts";
import {useComboList} from "@/hooks/combo/useCombo.ts";

export interface CombinedCombo {
  date: string;
  hasGame: boolean;
  combos: ComboListResponse[];
}

export const useCombinedComboList = (year: number, month: number) => {
  const { gameDateList, isLoading: isGameLoading, error: gameError } = useGameListByYearAndMonth(year, month);

  const startDate = `${year}-${String(month).padStart(2, "0")}-01`;
  const endDate = `${year}-${String(month).padStart(2, "0")}-${String(new Date(year, month, 0).getDate()).padStart(2, "0")}`;

  const { data: comboList, isLoading: isComboLoading, error: comboError } = useComboList(startDate, endDate);

  const combinedList = useMemo(() => {
    if (!gameDateList || !comboList) return [];

    return gameDateList
    .map((gameDate) => ({
      date: gameDate.date,
      hasGame: gameDate.hasGame,
      combos: comboList.filter((combo) => combo.gameStartDate === gameDate.date),
    }))
    .sort((a, b) => b.date.localeCompare(a.date));
  }, [gameDateList, comboList]);

  return { combinedList, isLoading: isGameLoading || isComboLoading, error: gameError || comboError };
};
