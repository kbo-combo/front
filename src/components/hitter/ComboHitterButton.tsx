import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { URL_PATH } from "@/constant";
import {toDateFormat} from "@/function/utils.ts";
import {canChangeCombo} from "@/function/combo/combo.ts";

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


  return (
      <Button onClick={handleClick} disabled={canChangeCombo(now, gameStartDateTime)}>
        타자 선택
      </Button>
  );
};

export default ComboHitterButton;

const Button = styled.button<{ disabled?: boolean }>`
  padding: 1.5rem 2.5rem;
  background: ${({ disabled }) => (disabled ? "#ccc" : "#007bff")};
  color: #fff;
  border: none;
  border-radius: 1rem;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  font-size: 1rem;
  transition: background 0.3s ease;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
`;
