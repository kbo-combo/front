import {PageArea, Wrapper} from "./RootTemplate.style.ts";
import {matchRoutes, Outlet, useLocation} from "react-router-dom";
import {URL_PATH} from "../../../constant";
import NavBar from "../../../components/@common/navbar/NavBar.tsx";

const NO_NAVIGATION_BAR_URLS = [
  URL_PATH.login,
].map((path) => ({ path }));

const RootTemplate = () => {

  const { pathname } = useLocation();
  const showNavBar = matchRoutes(NO_NAVIGATION_BAR_URLS, pathname) === null;

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
