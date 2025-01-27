import {Main, MainMessage} from "./Home.style.ts";
import GameList from "@components/game/GameList.tsx";

const Home = () => {

  return (
      <Main>
      <MainMessage>하루한타</MainMessage>
        <GameList/>
      </Main>
  );
};

export default Home;
