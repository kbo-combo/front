import {Main, MainMessage} from "./Home.style.ts";
import ComboHitterButton from "@components/hitter/ComboHitterButton.tsx";
import GameList from "@components/game/GameList.tsx";

const Home = () => {

  return (
      <Main>
      <MainMessage>안녕하세요. 야구를 좋아해서 만들었어요.</MainMessage>
        <GameList/>
        <ComboHitterButton/>
      </Main>
  );
};

export default Home;
