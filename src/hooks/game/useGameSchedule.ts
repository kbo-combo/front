import {useEffect, useRef, useState} from "react";
import {useGameListByYearAndMonth} from "@/hooks/game/useGame.ts";

export const useInitializeSelectedDate = (
    selectedDate: Date | null,
    setSelectedDate: (date: Date) => void
) => {
  const today = new Date();

  const initialMonth = selectedDate
      ? new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1)
      : new Date(today.getFullYear(), today.getMonth(), 1);

  const [currentMonth, setCurrentMonth] = useState(initialMonth);

  const { gameDateList } = useGameListByYearAndMonth(
      currentMonth.getFullYear(),
      currentMonth.getMonth() + 1
  );

  const lastSelectedDate = useRef<Date | null>(null);

  useEffect(() => {
    if (!gameDateList?.length) return;

    const availableDays = gameDateList
    .filter((d) => d.hasGame)
    .map((d) => d.date);

    if (availableDays.length === 0) return;

    const newSelectedDate = (() => {
      if (selectedDate && availableDays.includes(selectedDate.toISOString().split("T")[0])) {
        return selectedDate;
      }
      return new Date(availableDays[0]);
    })();

    if (!lastSelectedDate.current || lastSelectedDate.current.getTime() !== newSelectedDate.getTime()) {
      lastSelectedDate.current = newSelectedDate;
      setSelectedDate(newSelectedDate);
    }
  }, [currentMonth, gameDateList, selectedDate, setSelectedDate]);

  return { currentMonth, setCurrentMonth, gameDateList };
};

export const useScrollToSelectedDate = (
    selectedDate: Date | null,
) => {

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const dateRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    if (!selectedDate || !scrollContainerRef.current || !dateRefs.current) return;

    const selectedKey = selectedDate.toISOString().split("T")[0];
    const selectedElement = dateRefs.current[selectedKey];

    if (!selectedElement) return;

    const container = scrollContainerRef.current;
    const containerRect = container.getBoundingClientRect();
    const elementRect = selectedElement.getBoundingClientRect();

    const scrollLeft =
        container.scrollLeft +
        elementRect.left -
        containerRect.left -
        container.clientWidth / 2 +
        elementRect.width / 2;

    container.scrollTo({
      left: scrollLeft,
      behavior: "smooth",
    });
  }, [selectedDate, scrollContainerRef, dateRefs]);

  return { scrollContainerRef, dateRefs };

};
