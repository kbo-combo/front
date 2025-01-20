import ComboHittersPage from "@components/hitter/ComboHittersPage.tsx";
import {useLocation} from "react-router-dom";
import {TeamName} from "@constant/player.ts";


interface HitterSelectPageState {
  homeTeam: string;
  awayTeam: string;
}

const HitterSelectPage = () => {

  const location = useLocation();
  const { homeTeam, awayTeam } = location.state as HitterSelectPageState;

  return (
     <ComboHittersPage homeTeam={homeTeam as TeamName} awayTeam={awayTeam as TeamName}/>
  );
};

export default HitterSelectPage;
