import {Main, MainMessage} from "./Home.style.ts";
import GameList from "@components/game/GameList.tsx";
import GameSchedule from "@components/game/GameSchedule.tsx";

const Home = () => {

  return (
      <Main>
      <MainMessage>하루한타</MainMessage>
        <GameSchedule/>
        <GameList/>
      </Main>
  );
};

export default Home;
