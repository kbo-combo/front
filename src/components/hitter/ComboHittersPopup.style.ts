import styled from "styled-components";

export const Wrapper = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: ${({ theme: { color } }) => color.background};
  color: ${({ theme: { color } }) => color.primary};
`;

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 16px;
  width: 100%;
  justify-content: center;
  align-items: center;

  & > div {
    display: flex;
    gap: 8px;
    align-items: center;
  }

  & span {
    font-weight: bold;
  }
`;

export const FilterButton = styled.button<{ isSelected: boolean }>`
  padding: 8px 12px;
  background-color: ${({ isSelected }) => (isSelected ? "#007bff" : "#f0f0f0")};
  color: ${({ isSelected }) => (isSelected ? "white" : "#333")};
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${({ isSelected }) => (isSelected ? "#0056b3" : "#e0e0e0")};
  }
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
  font-size: 1.7rem;
  font-weight: bold;
  color: ${({ theme: { color } }) => color.primaryText};
`;

export const PlayerImage = styled.img`
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  border: 0.1rem solid ${({ theme: { color } }) => color.primary};
  object-fit: cover;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const PlayerPosition = styled.span`
  margin-top: 1rem;
  font-size: 1.2rem;
  color: ${({ theme: { color } }) => color.secondaryText};
`;
