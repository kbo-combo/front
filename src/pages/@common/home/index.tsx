import GameList from "@components/game/GameList.tsx";
import GameSchedule from "@components/game/GameSchedule.tsx";
import SelectedCombo from "@components/combo/SelectedCombo.tsx";
import {useCheckLogin} from "@/hooks/login.ts";
import ContentHeader from "@components/@common/contentHeader/ContentHeader.tsx";
import {PageWrapper} from "@components/@common/wrapper/pageWrapper.style.ts";


const Home = () => {

  const {isLoggedIn} = useCheckLogin()

  return (
      <PageWrapper>
        <ContentHeader title={"하루, 한타"}/>
          <GameSchedule/>
          {isLoggedIn ? <SelectedCombo /> : <div></div>}
          <GameList/>
      </PageWrapper>
  );
};

export default Home;

