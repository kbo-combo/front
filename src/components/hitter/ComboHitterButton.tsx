import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { URL_PATH } from "@/constant";
import {toDateFormat} from "@/function/utils.ts";
import {isBeforeComboAddDeadline} from "@/function/combo/combo.ts";
import theme from "@style/theme.style.ts";

interface ComboHitterButtonProps {
  homeTeam: string;
  awayTeam: string;
  gameId: number;
  startDate: string;
  startTime: string;
}

const ComboHitterButton = ({ gameId, homeTeam, awayTeam, startDate, startTime }: ComboHitterButtonProps) => {
  const navigate = useNavigate();

  const now = new Date()
  const gameStartDateTime = toDateFormat(startDate, startTime);
  const isGameStarted = () => {
    return now >= gameStartDateTime;
  };

  const handleClick = () => {
    if (!isGameStarted()) {
      navigate(URL_PATH.hitter_select, {
        state: { gameId, homeTeam, awayTeam },
      });
    }
  };

  if (isGameStarted()) {
    return <div></div>
  }


  const getComboButtonText = (now: Date, gameStartDateTime: Date) => {
    if (!isBeforeComboAddDeadline(now, gameStartDateTime)) return "타자 선택";

    const timeDiff = gameStartDateTime.getTime() - now.getTime();
    const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    return `${daysLeft - 2}일 후 선택 가능`;
  };
  return (
      <Button onClick={handleClick} disabled={isBeforeComboAddDeadline(now, gameStartDateTime)}>
        {getComboButtonText(now, gameStartDateTime)}
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
