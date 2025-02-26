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
import ComboHitterButton from "@components/hitter/ComboHitterButton.tsx";
import Loading from "@pages/@common/common/Loading.tsx";
import {sliceSecond} from "@/function/utils.ts";
import {useGameDate, useGameList} from "@/hooks/game/useGame.ts";
import {
  GameInfo,
  GameListWrapper,
  GameTime,
  PlayerCard,
  PlayerName,
  TeamLogo,
  TeamRow,
  TeamWrapper,
  Wrapper
} from "@components/game/GameList.style.ts";

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
  const {formattedDate} = useGameDate();
  const {data: games, isLoading, error} = useGameList(formattedDate);

  if (isLoading) return <Loading/>

  if (error) {
    throw error
  }

  return (
      <Wrapper>
        <GameListWrapper>
          {games?.slice(0, 5).map((game, index) => (
              <PlayerCard key={index}>
                <TeamWrapper>
                  <TeamRow>
                    <TeamLogo src={teamLogos[game.homeTeam]} alt={game.homeTeam}/>
                    <PlayerName>{game.homeStartingPitcher?.name ?? ""}</PlayerName>
                  </TeamRow>
                  <TeamRow>
                    <TeamLogo src={teamLogos[game.awayTeam]} alt={game.awayTeam}/>
                    <PlayerName>{game.awayStartingPitcher?.name ?? ""}</PlayerName>
                  </TeamRow>
                </TeamWrapper>
                <GameInfo>
                  <GameTime>{sliceSecond(game.startTime)}</GameTime>
                  <ComboHitterButton gameId={game.id} homeTeam={game.homeTeam}
                                     awayTeam={game.awayTeam} startDate={game.startDate} startTime={game.startTime}/>
                </GameInfo>
              </PlayerCard>
          ))}
        </GameListWrapper>
      </Wrapper>
  );
};

export default GameList
