import styled from "styled-components";
import theme from "@style/theme.style.ts";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }) => theme.color.background || "#fff"};
  margin-bottom: 1.5rem;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const NavButton = styled.button<{ disabled: boolean }>`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  padding: 0.5rem;
  color: ${({ disabled, theme }) => (disabled ? theme.color.grayDark : theme.color.primary || "#000")};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

export const CurrentMonth = styled.div`
  margin: 0 1rem;
  font-size: 2rem;
  font-weight: bold;
`;

/* 가로 스크롤 가능 */
export const ScrollContainer = styled.div`
  overflow-x: auto;
  white-space: nowrap;
  width: 100%;
  padding-bottom: 0.5rem;
  &::-webkit-scrollbar {
    display: none; /* 스크롤바 숨김 */
  }
`;

export const DatesWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const DateItem = styled.div<{ isToday: boolean }>`
  flex: 0 0 auto; /* 크기 고정 */
  min-width: 60px; /* 날짜 너비 지정 */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-align: center;
  font-weight: ${({ isToday }) => (isToday ? "bold" : "normal")};
  color: ${({ isToday, theme }) => (isToday ? theme.color.primary || "blue" : "#000")};
`;

export const WeekDay = styled.div`
  font-size: 1rem;
  color: ${theme.color.grayDark};
`;

export const Day = styled.div`
  font-size: 1.6rem;
`;
