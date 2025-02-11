import {Main, MainMessage} from "./Home.style.ts";
import GameList from "@components/game/GameList.tsx";
import GameSchedule from "@components/game/GameSchedule.tsx";
import SelectedCombo from "@components/combo/SelectedCombo.tsx";
import {GameDateProvider} from "@components/game/GameDateContext.tsx";
import {useCheckLogin} from "@/hooks/login.ts";
import SelectedComboError from "@components/combo/SelectedComboError.tsx";


const Home = () => {

  const {isLoggedIn} = useCheckLogin()

  return (
      <Main>
        <MainMessage>하루, 한타</MainMessage>
        <GameDateProvider>
          <GameSchedule/>
          {isLoggedIn ? <SelectedCombo /> : <SelectedComboError message="로그인 이후 콤보 선택이 가능합니다" />}
          <GameList/>
        </GameDateProvider>
      </Main>
  );
};

export default Home;

