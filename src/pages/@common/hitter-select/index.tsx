import ComboHittersPage from "@components/hitter/ComboHittersList.tsx";
import {useLocation} from "react-router-dom";
import {TeamName} from "@constant/player.ts";


interface HitterSelectPageState {
  homeTeam: string;
  awayTeam: string;
  gameId: number;
}

const HitterSelectPage = () => {

  const location = useLocation();
  const { gameId, homeTeam, awayTeam } = location.state as HitterSelectPageState;

  return (
     <ComboHittersPage gameId={gameId} homeTeam={homeTeam as TeamName} awayTeam={awayTeam as TeamName}/>
  );
};

export default HitterSelectPage;
