import GameList from "@components/game/GameList.tsx";
import GameSchedule from "@components/game/GameSchedule.tsx";
import SelectedCombo from "@components/combo/SelectedCombo.tsx";
import {useCheckLogin} from "@/hooks/login.ts";
import ContentHeader from "@components/@common/contentHeader/ContentHeader.tsx";
import {PageWrapper} from "@components/@common/wrapper/pageWrapper.style.ts";
import {useState} from "react";


const Home = () => {

  const {isLoggedIn} = useCheckLogin()
  const [hasCombo, setHasCombo] = useState(false);

  return (
      <PageWrapper>
        <ContentHeader title={"하루, 한타"} />
        <GameSchedule />
        {isLoggedIn && <SelectedCombo setHasCombo={setHasCombo} />}
        <GameList hasCombo={hasCombo} />
      </PageWrapper>
  );
};

export default Home;

