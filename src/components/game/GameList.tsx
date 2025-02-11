import styled from "styled-components";
import {useGameList} from "@/hooks/useGameList.ts";

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
import theme from "@style/theme.style.ts";
import ComboHitterButton from "@components/hitter/ComboHitterButton.tsx";
import {useGameDate} from "@components/game/GameDateContext.tsx";
import Loading from "@pages/@common/common/Loading.tsx";

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
  const { formattedDate } = useGameDate();
  const { data: games, isLoading, error} = useGameList(formattedDate);

  if (isLoading) return <Loading/>

  if (error) return <div>error</div>

  return (
      <Wrapper>
        <GameListWrapper>
          {games?.slice(0, 5).map((game, index) => (
              <PlayerCard key={index}>
                <TeamWrapper>
                  <TeamRow>
                    <TeamLogo src={teamLogos[game.homeTeam]} alt={game.homeTeam} />
                    <PlayerName>{game.homeStartingPitcher?.name ?? "선발 미정"}</PlayerName>
                  </TeamRow>
                  <TeamRow>
                    <TeamLogo src={teamLogos[game.awayTeam]} alt={game.awayTeam} />
                    <PlayerName>{game.awayStartingPitcher?.name ?? "선발 미정"}</PlayerName>
                  </TeamRow>
                </TeamWrapper>
                <GameInfo>
                  <GameTime>{game.startDate} {game.startTime}</GameTime>
                  <ComboHitterButton homeTeam={game.homeTeam} awayTeam={game.awayTeam}/>
                </GameInfo>
              </PlayerCard>
          ))}
        </GameListWrapper>
      </Wrapper>
  );
};


export const Wrapper = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  color: ${({ theme: { color } }) => color.primary};
  background-color: ${({ theme: { color } }) => color.background}; // 밝은 배경 유지
`;

export const GameListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
  padding: 1.0rem;
`;

export const PlayerCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-radius: 1rem;
  background: ${({ theme: { color } }) => color.cardBackground};
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
  flex-direction: row;
  align-items: center;
  gap: 1rem; 
`;

export const TeamLogo = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  object-fit: contain;
`;

export const PlayerName = styled.span`
  font-size: 1.4rem;
  color: ${({ theme: { color } }) => color.sub};
  text-align: left; 
  white-space: nowrap; 
`;
export const GameInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
  color: ${({ theme: { color } }) => color.primary};
  gap: 0.5rem;
`;

export const StadiumName = styled.span`
  font: ${theme.font.text};
  color: ${theme.color.subLight};
`;

export const GameTime = styled.span`
  font: ${theme.font.text};
  font-size : 2rem;
`;

export default GameList;

