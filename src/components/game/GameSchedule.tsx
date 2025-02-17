import { useState, useEffect, useRef } from "react";
import {
  CurrentMonth, DateItem, DatesWrapper, Day,
  Header, NavButton, ScrollContainer, WeekDay, Wrapper
} from "@components/game/GameSchedule.style.ts";
import { useGameDate } from "@/contexts/GameDateContext.tsx";
import { useGameListByYearAndMonth } from "@/hooks/useGameList.ts";
import { GameDateResponse } from "@apis/game.ts";

const MIN_MONTH = 0;
const MAX_MONTH = 10;

const GameSchedule = () => {
  const { selectedDate, setSelectedDate } = useGameDate();
  const today = new Date();

  const initialMonth = selectedDate
      ? new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1)
      : new Date(today.getFullYear(), today.getMonth(), 1);

  const [currentMonth, setCurrentMonth] = useState(initialMonth);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const dateRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const { data: availableDates } = useGameListByYearAndMonth(
      currentMonth.getFullYear(),
      currentMonth.getMonth() + 1
  ) as { data?: GameDateResponse[]; isLoading: boolean };

  useEffect(() => {
    if (!availableDates?.length) return;

    const availableDays = availableDates
    .map((d: GameDateResponse) => new Date(d.gameDate))
    .filter((d) => d.getMonth() === currentMonth.getMonth());

    if (availableDays.length) {
      if (selectedDate && selectedDate.getMonth() === currentMonth.getMonth()) {
        // 🔹 같은 월이면 기존 날짜를 유지하되, 유효한 날짜인지 확인
        const existingDate = availableDays.find(
            (d) => d.getDate() === selectedDate.getDate()
        );
        setSelectedDate(existingDate || availableDays[0]); // 존재하지 않으면 첫 번째 날짜 선택
      } else if (selectedDate && selectedDate.getMonth() > currentMonth.getMonth()) {
        // 🔹 이전 달로 이동한 경우 → 가장 마지막 날짜 선택
        setSelectedDate(availableDays[availableDays.length - 1]);
      } else {
        // 🔹 다음 달로 이동한 경우 → 가장 첫 번째 날짜 선택
        setSelectedDate(availableDays[0]);
      }
    }
  }, [currentMonth, availableDates]);

  useEffect(() => {
    if (selectedDate && scrollContainerRef.current) {
      const selectedKey = selectedDate.toDateString();
      const selectedElement = dateRefs.current[selectedKey];

      if (selectedElement) {
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
      }
    }
  }, [selectedDate]);

  const handlePrevMonth = () => {
    setCurrentMonth((prev) => {
      const newMonth = prev.getMonth() - 1;
      return newMonth < MIN_MONTH ? prev : new Date(prev.getFullYear(), newMonth, 1);
    });
  };

  const handleNextMonth = () => {
    setCurrentMonth((prev) => {
      const newMonth = prev.getMonth() + 1;
      return newMonth > MAX_MONTH ? prev : new Date(prev.getFullYear(), newMonth, 1);
    });
  };

  const handleSelectDate = (date: Date) => {
    if (availableDates?.some((d: GameDateResponse) => new Date(d.gameDate).toDateString() === date.toDateString())) {
      setSelectedDate(date);
    }
  };

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const days = new Date(year, month + 1, 0).getDate();

    return Array.from({ length: days }, (_, i) => {
      const dayDate = new Date(year, month, i + 1);
      return {
        date: dayDate,
        year,
        month: month + 1,
        day: dayDate.getDate(),
        weekDay: dayDate.toLocaleDateString("ko-KR", { weekday: "short" }),
      };
    });
  };

  const formattedDays = getDaysInMonth(currentMonth);
  const isPrevDisabled = currentMonth.getMonth() <= MIN_MONTH;
  const isNextDisabled = currentMonth.getMonth() >= MAX_MONTH;

  return (
      <Wrapper>
        <Header>
          <NavButton onClick={handlePrevMonth} disabled={isPrevDisabled}>
            ◀
          </NavButton>
          <CurrentMonth>{`${currentMonth.getFullYear()}.${String(currentMonth.getMonth() + 1).padStart(2, "0")}`}</CurrentMonth>
          <NavButton onClick={handleNextMonth} disabled={isNextDisabled}>
            ▶
          </NavButton>
        </Header>

        <ScrollContainer ref={scrollContainerRef}>
          <DatesWrapper>
            {formattedDays.map((dateObj, index) => {
              const isAvailable = availableDates?.some(
                  (d: GameDateResponse) => new Date(d.gameDate).toDateString() === dateObj.date.toDateString()
              );

              return (
                  <DateItem
                      key={index}
                      ref={(el) => (dateRefs.current[dateObj.date.toDateString()] = el)}
                      selected={selectedDate?.toDateString() === dateObj.date.toDateString()}
                      disabled={!isAvailable}
                      onClick={() => handleSelectDate(dateObj.date)}
                  >
                    <WeekDay>{dateObj.weekDay}</WeekDay>
                    <Day>{dateObj.day}</Day>
                  </DateItem>
              );
            })}
          </DatesWrapper>
        </ScrollContainer>
      </Wrapper>
  );
};

export default GameSchedule;
