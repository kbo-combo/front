import { useState } from "react";
import styled from "styled-components";
import theme from "@style/theme.style.ts";

const MIN_MONTH = 2; // 3월 (JavaScript 월은 0부터 시작)
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

        {/* 날짜 리스트 */}
        <DatesWrapper>
          {formattedDays.map((date, index) => (
              <DateItem key={index} isToday={date.day === today.getDate() && date.month === today.getMonth() + 1}>
                <WeekDay>{date.weekDay}</WeekDay>
                <Day>{date.day}</Day>
              </DateItem>
          ))}
        </DatesWrapper>
      </Wrapper>
  );
};

export default GameSchedule;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }) => theme.color.background || "#fff"};
  margin-bottom: 1.5rem;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const NavButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  color: ${({ theme }) => theme.color.primary || "#000"};
`;

const CurrentMonth = styled.div`
  margin: 0 1rem;
  font-size: 2rem;
  font-weight: bold;
`;

const DatesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0.5rem 0;
`;

const DateItem = styled.div<{ isToday: boolean }>`
  flex: 1;
  max-width: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  cursor: pointer;
  text-align: center;
  font-weight: ${({ isToday }) => (isToday ? "bold" : "normal")};
  color: ${({ isToday, theme }) => (isToday ? theme.color.primary || "blue" : "#000")};
`;

const WeekDay = styled.div`
  font-size: 1rem;
  color: ${theme.color.grayDark};
`;

const Day = styled.div`
  font-size: 1.6rem;
`;
