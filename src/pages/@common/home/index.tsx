import {useCheckLogin} from "@/hooks/login.ts";
import ContentHeader from "@components/@common/contentHeader/ContentHeader.tsx";
import {PageWrapper} from "@components/@common/wrapper/pageWrapper.style.ts";
import {useState} from "react";
import SelectedCombo from "@components/combo/selected/SelectedCombo.tsx";
import GameSchedule from "@components/game/schedule/GameSchedule.tsx";
import GameList from "@components/game/list/GameList.tsx";


const Home = () => {

  const {isLoggedIn} = useCheckLogin()
  const [comboGameDateTime, setComboGameDateTime] = useState<Date | null>(null);

  return (
      <PageWrapper>
        <ContentHeader title={"하루, 한타"} />
        <GameSchedule />
        {isLoggedIn && <SelectedCombo setComboGameDateTime={setComboGameDateTime} />}
        <GameList comboGameDateTime={comboGameDateTime} />
      </PageWrapper>
  );
};

export default Home;

