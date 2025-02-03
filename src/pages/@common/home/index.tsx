import {Main, MainMessage} from "./Home.style.ts";
import GameList from "@components/game/GameList.tsx";
import GameSchedule from "@components/game/GameSchedule.tsx";
import SelectedCombo from "@components/combo/SelectedCombo.tsx";
import {GameDateProvider} from "@components/game/GameDateContext.tsx";

const Home = () => {

  return (
      <Main>
        <MainMessage>야구생에 즐거움을, 하루한타</MainMessage>
        <GameDateProvider>
          <GameSchedule/>
          <SelectedCombo/>
          <GameList/>
        </GameDateProvider>
      </Main>
  );
};

export default Home;
