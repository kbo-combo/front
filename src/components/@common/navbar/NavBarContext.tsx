import {createContext, useContext, useState} from "react";

interface NavBarContextValue {
  navBarOpen: boolean;
  showNavBar: () => void;
  hideNavBar: () => void;
}

const NavBarContext = createContext<NavBarContextValue | undefined>(undefined);

export const NavBarProvider = ({children}: { children: React.ReactNode }) => {
  const [navBarOpen, setNavBarOpen] = useState(true);

  const showNavBar = () => setNavBarOpen(true);
  const hideNavBar = () => setNavBarOpen(false);

  return (
      <NavBarContext.Provider value={{navBarOpen, showNavBar, hideNavBar}}>
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
