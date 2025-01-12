import {createContext, useContext, useState} from "react";
import {matchRoutes, useLocation} from "react-router-dom";
import {URL_PATH} from "@/constant";

interface NavBarContextValue {
  navBarOpen: boolean;
  showNavBar: (isOpen: boolean) => void;
}

const NO_NAVIGATION_BAR_URLS = [
  URL_PATH.login,
].map((path) => ({ path }));

const NavBarContext = createContext<NavBarContextValue | undefined>(undefined);

export const NavBarProvider = ({ children }: { children: React.ReactNode }) => {
  const [navBarOpen, setNavBarOpen] = useState(true);

  const showNavBar = (isOpen: boolean) => setNavBarOpen(isOpen);

  return (
      <NavBarContext.Provider value={{ navBarOpen, showNavBar }}>
        {children}
      </NavBarContext.Provider>
  );
};

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
