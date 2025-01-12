import styled from "styled-components";
import theme from "@style/theme.style.ts";

export const Wrapper = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: ${({ theme: { color } }) => color.background};
  color: ${({ theme: { color } }) => color.primary};
`;

export const PlayerListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  padding: 1.7rem;
`;

export const PlayerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border-radius: 1rem;
  background: ${({ theme: { color } }) => color.cardBackground};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  margin-bottom: 3rem;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  }
`;

export const PlayerName = styled.span`
  margin-top: 1rem;
  font: ${theme.font.text};
  font-size: 1.6rem;
  color: ${theme.color.sub}
`;

export const PlayerImage = styled.img`
  width: 6rem;
  height: 8rem;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const PlayerInfo  = styled.span`
  margin-top: 1rem;
  font-size: 1.2rem;
  color: ${theme.color.subLight}
`;

export const SearchInput = styled.input`
  width: 100%;
  max-width: 10rem;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  border: 1px solid ${({ theme }) => theme.color.buttonBackground};
  border-radius: 0.25rem;
  outline: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:focus {
    border-color: ${({ theme }) => theme.color.primary};
  }
`;
