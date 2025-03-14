import ComboHittersPage from "@components/hitter/ComboHittersList.tsx";
import {useHitterComboState} from "@/hooks/combo/useCombo.ts";


const HitterSelectPage = () => {

  const { hitterComboState } = useHitterComboState();
  if (hitterComboState == null) {
    throw new Error()
  }

  return (
     <ComboHittersPage gameId={hitterComboState.gameId} homeTeam={hitterComboState.homeTeam} awayTeam={hitterComboState.awayTeam}/>
  );
};

export default HitterSelectPage;
