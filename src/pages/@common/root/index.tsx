import {PageArea, Wrapper} from "./RootTemplate.style.ts";
import {Outlet} from "react-router-dom";
import NavBar from "@components/@common/navbar/NavBar.tsx";
import {useNavBarVisibility} from "@/hooks/useNavBar.ts";


const RootTemplate = () => {


  return (
      <Wrapper>
        <PageArea>
          <Outlet />
          {useNavBarVisibility() && <NavBar />}
        </PageArea>
      </Wrapper>
  );
};

export default RootTemplate;
