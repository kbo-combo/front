import { useState } from "react";
import {
  CurrentMonth, DateItem, DatesWrapper, Day,
  Header,
  NavButton,
  ScrollContainer, WeekDay,
  Wrapper
} from "@components/game/GameSchedule.style.ts";

const MIN_MONTH = 2; // 3월 (JavaScript 기준 0부터 시작)
const MAX_MONTH = 10; // 11월

const GameSchedule = () => {
  const today = new Date();
  const initialMonth =
      today.getMonth() < MIN_MONTH || today.getMonth() > MAX_MONTH
          ? new Date(today.getFullYear(), MIN_MONTH, 1)
          : new Date(today.getFullYear(), today.getMonth(), 1);

  const [currentMonth, setCurrentMonth] = useState(initialMonth);

  /** 현재 월의 날짜 리스트 생성 */
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const days = new Date(year, month + 1, 0).getDate(); // 해당 월의 총 일 수

    return Array.from({ length: days }, (_, i) => {
      const dayDate = new Date(year, month, i + 1);
      return {
        year: year,
        month: month + 1, // JS에서는 0부터 시작하므로 +1
        day: dayDate.getDate(),
        weekDay: dayDate.toLocaleDateString("ko-KR", { weekday: "short" }),
      };
    });
  };

  /** 이전 달로 이동 (3월 미만 이동 불가) */
  const handlePrevMonth = () => {
    setCurrentMonth((prev) => {
      const newMonth = prev.getMonth() - 1;
      return newMonth < MIN_MONTH ? prev : new Date(prev.getFullYear(), newMonth, 1);
    });
  };

  /** 다음 달로 이동 (11월 초과 이동 불가) */
  const handleNextMonth = () => {
    setCurrentMonth((prev) => {
      const newMonth = prev.getMonth() + 1;
      return newMonth > MAX_MONTH ? prev : new Date(prev.getFullYear(), newMonth, 1);
    });
  };

  const formattedDays = getDaysInMonth(currentMonth);
  const isPrevDisabled = currentMonth.getMonth() <= MIN_MONTH;
  const isNextDisabled = currentMonth.getMonth() >= MAX_MONTH;

  return (
      <Wrapper>
        {/* 상단 월 표시 */}
        <Header>
          <NavButton onClick={handlePrevMonth} disabled={isPrevDisabled}>
            ◀
          </NavButton>
          <CurrentMonth>{`${currentMonth.getFullYear()}.${String(currentMonth.getMonth() + 1).padStart(2, "0")}`}</CurrentMonth>
          <NavButton onClick={handleNextMonth} disabled={isNextDisabled}>
            ▶
          </NavButton>
        </Header>

        <ScrollContainer>
          <DatesWrapper>
            {formattedDays.map((date, index) => (
                <DateItem key={index} isToday={date.day === today.getDate() && date.month === today.getMonth() + 1}>
                  <WeekDay>{date.weekDay}</WeekDay>
                  <Day>{date.day}</Day>
                </DateItem>
            ))}
          </DatesWrapper>
        </ScrollContainer>
      </Wrapper>
  );
};

export default GameSchedule;
