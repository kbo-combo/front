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

export const PlayerListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  padding: 16px;
`;

export const PlayerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  border-radius: 8px;
  background: ${({ theme: { color } }) => color.cardBackground};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  }
`;

export const PlayerName = styled.span`
  margin-top: 8px;
  font-size: 1.6rem;
  font-weight: bold;
  color: ${({ theme: { color } }) => color.primaryText};
`;

export const PlayerImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 3px solid ${({ theme: { color } }) => color.primary};
  object-fit: cover;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const PlayerPosition = styled.span`
  margin-top: 4px;
  font-size: 1.2rem;
  color: ${({ theme: { color } }) => color.secondaryText};
`;

export const TeamListWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;
  gap: 16px;
`;

export const TeamCard = styled.div`
  padding: 16px;
  border-radius: 8px;
  text-align: center;
  color: white;
  font: bold 1.8rem / 2.4rem "jua";
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  }
`;

export const TeamName = styled.span`
  display: block;
  margin-top: 8px;
  font-size: 1.5rem;
`;
