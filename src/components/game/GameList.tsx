import styled from "styled-components";
import {useRecentGame} from "@/hooks/useRecentGame.ts";

import ncLogo from "@assets/logos/nc-logo.svg";
import kiaLogo from "@assets/logos/kia-logo.svg";
import doosanLogo from "@assets/logos/doosan-log.svg";
import lgLogo from "@assets/logos/lg-logo.svg";
import ssgLogo from "@assets/logos/ssg-logo.svg";
import samsungLogo from "@assets/logos/samsung-logo.svg";
import lotteLogo from "@assets/logos/lotte-logo.svg";
import kiwoomLogo from "@assets/logos/kiwoom-logo.svg";
import hanwhwaLogo from "@assets/logos/hanhwa-logo.svg";
import ktLogo from "@assets/logos/kt-logo.svg";

const teamLogos: { [key: string]: string } = {
  NC: ncLogo,
  KIA: kiaLogo,
  DOOSAN: doosanLogo,
  LG: lgLogo,
  SSG: ssgLogo,
  SAMSUNG: samsungLogo,
  LOTTE: lotteLogo,
  KIWOOM: kiwoomLogo,
  HANWHA: hanwhwaLogo,
  KT: ktLogo,
};

const GameList = () => {
  const {data: games, isLoading, error} = useRecentGame();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading games: {error.message}</p>;

  return (
      <Wrapper>
        <PlayerListWrapper>
          {games?.slice(0, 5).map((game, index) => (
              <PlayerCard key={index}>
                {/* 홈 팀 정보 */}
                <TeamWrapper>
                  <TeamLogo src={teamLogos[game.homeTeam]} alt={game.homeTeam}/>
                  <PlayerInfo>{game.homePitcherName || "투수 정보 없음"}</PlayerInfo>
                </TeamWrapper>

                {/* 경기 결과 */}
                <GameResult>
                  <span>{game.stadiumName}</span>
                  <span>{game.gameSchedule}</span>
                </GameResult>

                {/* 원정 팀 정보 */}
                <TeamWrapper>
                  <TeamLogo src={teamLogos[game.awayTeam]} alt={game.awayTeam}/>
                  <PlayerInfo>{game.awayPitcherName || "투수 정보 없음"}</PlayerInfo>
                </TeamWrapper>
              </PlayerCard>
          ))}
        </PlayerListWrapper>
      </Wrapper>
  );
};

export const Wrapper = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: ${({theme: {color}}) => color.background};
  color: ${({theme: {color}}) => color.primary};
`;

export const PlayerListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;
  padding: 1.7rem;
`;

export const PlayerCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-radius: 1rem;
  background: ${({theme: {color}}) => color.cardBackground};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  margin-bottom: 3rem;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  }
`;

export const PlayerInfo = styled.span`
  margin-top: 1rem;
  font-size: 1.2rem;
  color: ${({theme: {color}}) => color.subLight};
`;

export const TeamWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0.5rem;
  width: 100%;
`;

export const TeamLogo = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 0.5rem;
`;

export const GameResult = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0;
  font-size: 1.2rem;
  font-weight: bold;
  color: ${({theme: {color}}) => color.subLight};
`;


export default GameList;
