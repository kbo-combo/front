import {
  GameScore,
  PlayerInfoWrapper,
  PlayerName,
  TeamLogo,
  TeamRow
} from "@components/game/list/GameList.style";
import {teamLogos} from "@/types/team/team";
import {TeamName} from "@constant/player.ts";
import {GameState} from "@/types/game/game.ts";

interface GameTeamRowProps {
  team: TeamName;
  startingPitcherName?: string | null;
  score?: number;
  opponentScore?: number;
  gameState: GameState;
}

const TBD_PITCHER_TEXT = "선발 미정";

const GameListTeamRow = ({
                       team, startingPitcherName, score,
                       opponentScore, gameState
                     }: GameTeamRowProps) => {
  const isWinner =
      score !== undefined &&
      opponentScore !== undefined &&
      gameState === "COMPLETED" &&
      score > opponentScore;

  return (
      <TeamRow>
        <TeamLogo src={teamLogos[team]} alt={team}/>
        <PlayerInfoWrapper>
          <PlayerName $isTbd={!startingPitcherName}>
            {startingPitcherName ?? TBD_PITCHER_TEXT}
          </PlayerName>
          {(gameState === "COMPLETED" || gameState === 'RUNNING')  && score !== undefined && (
              <GameScore $isWinner={isWinner}>{score}</GameScore>
          )}
        </PlayerInfoWrapper>
      </TeamRow>
  );
};

export default GameListTeamRow;

