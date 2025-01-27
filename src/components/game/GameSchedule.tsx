import { useState } from "react";
import styled from "styled-components";
import theme from "@style/theme.style.ts";

const GameSchedule = () => {
  const today = new Date();
  const [currentDate] = useState(today);

  const getFormattedDate = (date: Date) => ({
    month: date.toLocaleDateString("ko-KR", { month: "short" }),
    day: date.getDate(),
    weekDay: date.toLocaleDateString("ko-KR", { weekday: "short" }),
  });

  const daysInView = Array.from({ length: 10 }, (_, i) => {
    const tempDate = new Date();
    tempDate.setDate(currentDate.getDate() + i - 5);
    return tempDate;
  });

  const formattedDates = daysInView.map(getFormattedDate);

  return (
      <Wrapper>
        <DatesWrapper>
          {formattedDates.map((date, index) => (
              <DateItem key={index} isToday={date.day === today.getDate()}>
                <Month>{date.month}</Month>
                <Day>{date.day}</Day>
                <WeekDay>{date.weekDay}</WeekDay>
              </DateItem>
          ))}
        </DatesWrapper>
      </Wrapper>
  );
};

export default GameSchedule;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.background || "#fff"};
  margin-bottom: 1.5rem;
`;

const DatesWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: space-between;
  width: 100%;
  overflow-x: auto;
  padding: 0.5rem 0;
  white-space: nowrap;
`;

const DateItem = styled.div<{ isToday: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-bottom: ${({ isToday, theme }) =>
    isToday ? `2px solid ${theme.color.primary || "blue"}` : "none"};
  color: ${({ isToday, theme }) => (isToday ? theme.color.primary || "blue" : "#000")};
  cursor: pointer;
  font-weight: ${({ isToday }) => (isToday ? "bold" : "normal")};
`;

const Month = styled.div`
  font-size: 1.2rem;
`;

const Day = styled.div`
  font-size: 2.0rem;
`;

const WeekDay = styled.div`
  font-size: 1.2rem;
  color: ${theme.color.grayDark}
`;
