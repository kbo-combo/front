import {Main, MainMessage} from "./Home.style.ts";
import GameList from "@components/game/GameList.tsx";
import GameSchedule from "@components/game/GameSchedule.tsx";
import SelectedCombo from "@components/combo/SelectedCombo.tsx";

const Home = () => {

  return (
      <Main>
      <MainMessage>야구생에 즐거움을, 하루한타</MainMessage>
        <GameSchedule/>
        <SelectedCombo playerName={'김도영'} playerImage={'https://6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2024/52605.jpg'} comboStatus={'PASS'} atBats={4} hits={1}/>
        <GameList/>
      </Main>
  );
};

export default Home;
