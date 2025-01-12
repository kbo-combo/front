import {PageArea, Wrapper} from "./RootTemplate.style.ts";
import {matchRoutes, Outlet, useLocation} from "react-router-dom";
import {URL_PATH} from "constant";
import NavBar from "@components/@common/navbar/NavBar.tsx";
import {useNavBar} from "@components/@common/navbar/NavBarContext.tsx";

const NO_NAVIGATION_BAR_URLS = [
  URL_PATH.login
].map((path) => ({ path }));

const RootTemplate = () => {

  const { pathname } = useLocation();
  const { navBarOpen } = useNavBar();
  const showNavBar = matchRoutes(NO_NAVIGATION_BAR_URLS, pathname) === null && navBarOpen;

  return (
      <Wrapper>
        <PageArea>
          <Outlet />
          {showNavBar && <NavBar />}
        </PageArea>
      </Wrapper>
  );
};

export default RootTemplate;
