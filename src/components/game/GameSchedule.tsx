import { useState } from "react";
import styled from "styled-components";
import theme from "@style/theme.style.ts";

const GameSchedule = () => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(new Date(today.getFullYear(), today.getMonth(), 1));

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const days = new Date(year, month + 1, 0).getDate();

    return Array.from({ length: days }, (_, i) => {
      const dayDate = new Date(year, month, i + 1);
      return {
        year: year,
        month: month + 1,
        day: dayDate.getDate(),
        weekDay: dayDate.toLocaleDateString("ko-KR", { weekday: "short" }),
      };
    });
  };

  /** 이전 달로 이동 */
  const handlePrevMonth = () => {
    setCurrentMonth((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  };

  /** 다음 달로 이동 */
  const handleNextMonth = () => {
    setCurrentMonth((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  };

  const formattedDays = getDaysInMonth(currentMonth);

  return (
      <Wrapper>
        {/* 상단 월 표시 */}
        <Header>
          <NavButton onClick={handlePrevMonth}>◀</NavButton>
          <CurrentMonth>{`${currentMonth.getFullYear()}.${String(currentMonth.getMonth() + 1).padStart(2, "0")}`}</CurrentMonth>
          <NavButton onClick={handleNextMonth}>▶</NavButton>
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
