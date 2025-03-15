import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import {URL_PATH} from "@/constant";
import {toDateFormat} from "@/function/utils.ts";
import {catNotSelectCombo, isBeforeComboAddDeadline} from "@/function/combo/combo.ts";
import theme from "@style/theme.style.ts";
import {useHitterComboState} from "@/hooks/combo/useCombo.ts";
import {TeamName} from "@constant/player.ts";
import {GameState} from "@/types/game/game.ts";

interface ComboHitterButtonProps {
  homeTeam: TeamName;
  awayTeam: TeamName;
  gameId: number;
  startDate: string;
  startTime: string;
  hasCombo: boolean;
  gameState: GameState
}

const ComboHitterButton = ({ gameId, homeTeam, awayTeam, startDate, startTime, hasCombo, gameState}: ComboHitterButtonProps) => {
  const navigate = useNavigate();
  const { updateHitterCombo } = useHitterComboState();

  const now = new Date()
  const gameStartDateTime = toDateFormat(startDate, startTime);
  const isGameStarted = () => {
    return now >= gameStartDateTime;
  };

  const handleClick = () => {
    if (!isGameStarted()) {
      updateHitterCombo(gameId, homeTeam, awayTeam);
      navigate(URL_PATH.hitter_select);
    }
  };

  const getComboButtonText = (now: Date, gameStartDateTime: Date, gameState: GameState) => {
    if (gameState == "CANCEL") {
      return "게임 취소"
    }

    if (gameState == "COMPLETED") {
      return "게임 종료"
    }

    if (!isBeforeComboAddDeadline(now, gameStartDateTime)) {
      if (hasCombo) {
        return "타자 변경"
      }
      return "타자 선택";
    }

    const timeDiff = gameStartDateTime.getTime() - now.getTime();
    const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    return `${daysLeft - 2}일 후 선택 가능`;
  };
  return (
      <Button onClick={handleClick} disabled={isBeforeComboAddDeadline(now, gameStartDateTime) || catNotSelectCombo(now, gameStartDateTime, gameState)}>
        {getComboButtonText(now, gameStartDateTime, gameState)}
      </Button>
  );
};

export default ComboHitterButton;

const Button = styled.button<{ disabled?: boolean }>`
  padding: 1.5rem 2.5rem;
  white-space: nowrap;
  background: ${({ disabled }) => (disabled ? theme.color.grayDark : theme.color.fontPrimaryForBackground)};
  color: #fff;
  border: none;
  border-radius: 1rem;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  font: ${theme.font.text};
  margin-top: auto;
  font-size: 1.5rem;
  transition: background 0.3s ease;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
`;
