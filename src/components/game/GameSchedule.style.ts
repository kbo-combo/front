import styled from "styled-components";
import theme from "@style/theme.style.ts";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${theme.color.background};
  margin-bottom: 1.5rem;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 2.5rem;
`;

export const NavButton = styled.button<{ disabled: boolean }>`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: ${({disabled}) => (disabled ? "not-allowed" : "pointer")};
  padding: 0.5rem;
  color: ${({
              disabled,
              theme
            }) => (disabled ? theme.color.grayDark : theme.color.primary)};
  opacity: ${({disabled}) => (disabled ? 0.5 : 1)};
`;

export const CurrentMonth = styled.div`
  margin: 0 1rem;
  font-size: 3.2rem;
  font-weight: bold;
`;

export const ScrollContainer = styled.div`
  overflow-x: auto;
  white-space: nowrap;
  width: 100%;
  padding-bottom: 0.5rem;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const DatesWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const DateItem = styled.div<{ selected: boolean; disabled?: boolean }>`
  flex: 0 0 auto;
  min-width: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: ${({ selected }) => (selected ? "bold" : "normal")};
  color: ${({ selected, disabled, theme }) =>
      disabled ? theme.color.gray : selected ? theme.color.primary : theme.color.sub};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
`;

export const WeekDay = styled.div`
  font-size: 1.4rem;
  color: ${theme.color.grayDark};
  margin-bottom: 1rem;
`;

export const Day = styled.div`
  font: ${theme.font.text};
  font-size: 2.2rem;
  
`;
