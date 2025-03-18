import styled from "styled-components";
import theme from "@style/theme.style.ts";

export const Wrapper = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  color: ${({theme: {color}}) => color.primary};
  background-color: ${({theme: {color}}) => color.background};
  margin-bottom: 4rem;
`;

export const GameListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
  padding: 1.0rem;
`;

export const PlayerCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-radius: 1rem;
  background: ${({theme: {color}}) => color.cardBackground};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`;

export const TeamWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const TeamRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const TeamLogo = styled.img`
  width: 5rem;
  height: 5rem;
  @media (max-width: 500px) {
    width: 3.6rem;
    height: 3.6rem;
  }
  border-radius: 50%;
  object-fit: contain;
  flex-shrink: 0;
`;

export const PlayerInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
`;

export const PlayerName = styled.span<{ $isTbd: boolean }>`
  font: ${theme.font.text};
  font-size: 1.6rem;
  color: ${({ $isTbd, theme }) => ($isTbd ? theme.color.grayDark : theme.color.sub)};
  text-align: center;
  width: 5rem;
  flex: none;
  white-space: nowrap;
`;

export const GameScore = styled.span`
  font: ${theme.font.text};
  color: ${theme.color.sub};
  font-size: 2.0rem;
  min-width: 4rem;
  text-align: right;
`;
export const GameInfo = styled.div`
  display: flex;
  height: 100%;
  bottom: 0.1rem;
  right: 4rem; 
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
  color: ${({theme: {color}}) => color.primary};
  gap: 0.5rem;
`;

export const GameTime = styled.span`
  font: ${theme.font.text};
  color: ${theme.color.sub};
  margin-bottom: auto;
  font-size: 1.8rem;
`;

