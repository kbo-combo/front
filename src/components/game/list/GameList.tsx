import ComboHitterButton from "@components/hitter/ComboHitterButton.tsx";
import Loading from "@pages/@common/common/Loading.tsx";
import {sliceSecond} from "@/function/utils.ts";
import {useGameDate, useGameList} from "@/hooks/game/useGame.ts";
import {
  GameInfo,
  GameListWrapper,
  GameTime,
  PlayerCard,
  TeamWrapper,
  Wrapper
} from "@components/game/list/GameList.style.ts";
import GameListTeamRow from "@components/game/list/GameListTeamRow.tsx";

interface GameListProps {
  comboGameDateTime: Date | null
}

const GameList = ({ comboGameDateTime }: GameListProps) => {
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
                  <GameListTeamRow
                      team={game.homeTeam}
                      startingPitcherName={game.homeStartingPitcher?.name}
                      score={game.gameScore?.homeTeamScore}
                      opponentScore={game.gameScore?.awayTeamScore}
                      gameState={game.gameState}
                  />
                  <GameListTeamRow
                      team={game.awayTeam}
                      startingPitcherName={game.awayStartingPitcher?.name}
                      score={game.gameScore?.awayTeamScore}
                      opponentScore={game.gameScore?.homeTeamScore}
                      gameState={game.gameState}
                  />
                </TeamWrapper>
                <GameInfo>
                      <GameTime>{sliceSecond(game.startTime)}</GameTime>
                  <ComboHitterButton gameId={game.id} homeTeam={game.homeTeam}
                                     awayTeam={game.awayTeam} startDate={game.startDate}
                                     startTime={game.startTime}
                                     comboGameDateTime={comboGameDateTime} gameState={game.gameState}/>
                </GameInfo>
              </PlayerCard>
          ))}
        </GameListWrapper>
      </Wrapper>
  );
};

export default GameList
