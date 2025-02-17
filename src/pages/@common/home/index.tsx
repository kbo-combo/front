import {Main, MainMessage} from "./Home.style.ts";
import GameList from "@components/game/GameList.tsx";
import GameSchedule from "@components/game/GameSchedule.tsx";
import SelectedCombo from "@components/combo/SelectedCombo.tsx";
import {useCheckLogin} from "@/hooks/login.ts";


const Home = () => {

  const {isLoggedIn} = useCheckLogin()

  return (
      <Main>
        <MainMessage>하루, 한타</MainMessage>
          <GameSchedule/>
          {isLoggedIn ? <SelectedCombo /> : <div></div>}
          <GameList/>
      </Main>
  );
};

export default Home;

