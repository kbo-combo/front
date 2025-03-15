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
import {teamLogos} from "@/types/team/team.ts";

const GameList = ({ hasCombo }: { hasCombo: boolean }) => {
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
                                     awayTeam={game.awayTeam} startDate={game.startDate}
                                     startTime={game.startTime}
                                     hasCombo={hasCombo} gameState={game.gameState}/>
                </GameInfo>
              </PlayerCard>
          ))}
        </GameListWrapper>
      </Wrapper>
  );
};

export default GameList
