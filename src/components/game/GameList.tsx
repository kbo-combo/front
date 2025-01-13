import styled from "styled-components";
import {useRecentGame} from "@/hooks/useRecentGame.ts";
import theme from "@style/theme.style.ts"; // styled components import

const teamLogos: { [key: string]: string } = {
  NC: "/assets/logos/nc-logo.svg",
  KIA: "/assets/logos/kia-logo.svg",
  DOOSAN: "/assets/logos/doosan-logo.svg",
  LG: "/assets/logos/lg-logo.svg",
  SSG: "/assets/logos/ssg-logo.svg",
  SAMSUNG: "/assets/logos/samsung-logo.svg",
  LOTTE: "/assets/logos/lotte-logo.svg",
  KIWOOM: "/assets/logos/kiwoom-logo.svg",
  HANWHA: "/assets/logos/hanwha-logo.svg",
  KT: "/assets/logos/kt-logo.svg",
};

const GameList = () => {
  const { data: games, isLoading, error } = useRecentGame();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading games: {error.message}</p>;

  return (
      <Wrapper>
        <PlayerListWrapper>
          {games?.slice(0, 5).map((game, index) => (
              <PlayerCard key={index}>
                {/* 홈 팀 정보 */}
                <TeamWrapper>
                  <TeamLogo src={teamLogos[game.homeTeam]} alt={game.homeTeam} />
                  <PlayerName>{game.homeTeam}</PlayerName>
                  <PlayerInfo>{game.homePitcherName || "투수 정보 없음"}</PlayerInfo>
                </TeamWrapper>

                {/* 경기 결과 */}
                <GameResult>
                  <span>{game.stadiumName}</span>
                  <span>{game.gameSchedule.toLocaleDateString()}</span>
                </GameResult>

                {/* 원정 팀 정보 */}
                <TeamWrapper>
                  <TeamLogo src={teamLogos[game.awayTeam]} alt={game.awayTeam} />
                  <PlayerName>{game.awayTeam}</PlayerName>
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
  color: ${({ theme: { color } }) => color.sub};
`;


export const PlayerInfo = styled.span`
  margin-top: 1rem;
  font-size: 1.2rem;
  color: ${({ theme: { color } }) => color.subLight};
`;


export const TeamWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.5rem;
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
  color: ${({ theme: { color } }) => color.subLight};
`;


export default GameList;
