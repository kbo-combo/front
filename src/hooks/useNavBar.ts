import {matchRoutes, useLocation} from "react-router-dom";
import {URL_PATH} from "@/constant";
import {useContext} from "react";
import {NavBarContext} from "@components/@common/navbar/NavBarContext.ts";

const NO_NAVIGATION_BAR_URLS = [
  URL_PATH.login,
].map((path) => ({ path }));


export const useNavBar = () => {
  const context = useContext(NavBarContext);
  if (!context) {
    throw new Error("useNavBar must be used within a NavBarProvider");
  }
  return context;
};

export const useNavBarVisibility = () => {
  const { pathname } = useLocation();
  const { navBarOpen } = useNavBar();

  return matchRoutes(NO_NAVIGATION_BAR_URLS, pathname) === null && navBarOpen;
};
