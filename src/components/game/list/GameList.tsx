import ComboHitterButton from "@components/hitter/ComboHitterButton.tsx";
import Loading from "@pages/@common/common/Loading.tsx";
import {sliceSecond} from "@/function/utils.ts";
import {useGameDate, useGameList} from "@/hooks/game/useGame.ts";
import {
  GameInfo,
  GameListWrapper,
  GameScore,
  GameTime,
  PlayerCard,
  PlayerInfoWrapper,
  PlayerName,
  TeamLogo,
  TeamRow,
  TeamWrapper,
  Wrapper
} from "@components/game/list/GameList.style.ts";
import {teamLogos} from "@/types/team/team.ts";


const TBD_PITCHER_TEXT = '선발 미정'

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
                  <TeamRow>
                    <TeamLogo src={teamLogos[game.homeTeam]} alt={game.homeTeam}/>
                    <PlayerInfoWrapper>
                      <PlayerName $isTbd={!game.homeStartingPitcher?.name}>
                        {game.homeStartingPitcher?.name ?? TBD_PITCHER_TEXT}
                      </PlayerName>
                      <GameScore>
                        {game.gameScore?.homeTeamScore}
                      </GameScore>
                    </PlayerInfoWrapper>
                  </TeamRow>
                  <TeamRow>
                    <TeamLogo src={teamLogos[game.awayTeam]} alt={game.awayTeam}/>
                    <PlayerInfoWrapper>
                      <PlayerName $isTbd={!game.awayStartingPitcher?.name}>
                        {game.awayStartingPitcher?.name ?? TBD_PITCHER_TEXT}
                      </PlayerName>
                      <GameScore>
                        {game.gameScore?.awayTeamScore}
                      </GameScore>
                    </PlayerInfoWrapper>
                  </TeamRow>
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
