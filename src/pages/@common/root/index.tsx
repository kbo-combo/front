import {PageArea, Wrapper} from "./RootTemplate.style.ts";
import {Outlet} from "react-router-dom";
import NavBar from "@components/@common/navbar/NavBar.tsx";
import {useNavBarVisibility} from "@components/@common/navbar/NavBarContext.tsx";


const RootTemplate = () => {

  const navBarOpen = useNavBarVisibility();

  return (
      <Wrapper>
        <PageArea>
          <Outlet />
          {navBarOpen && <NavBar />}
        </PageArea>
      </Wrapper>
  );
};

export default RootTemplate;
