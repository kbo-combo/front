import {Main, MainMessage} from "./Home.style.ts";
import GameList from "@components/game/GameList.tsx";
import GameSchedule from "@components/game/GameSchedule.tsx";
import SelectedCombo from "@components/combo/SelectedCombo.tsx";
import {GameDateProvider} from "@components/game/GameDateContext.tsx";


const Home = () => {

  return (
      <Main>
        <MainMessage>하루, 한타</MainMessage>
        <GameDateProvider>
          <GameSchedule/>
          <SelectedCombo/>
          <GameList/>
        </GameDateProvider>
      </Main>
  );
};

export default Home;

