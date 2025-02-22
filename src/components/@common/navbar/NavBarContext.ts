import { createContext } from "react";

interface NavBarContextValue {
  navBarOpen: boolean;
  showNavBar: (isOpen: boolean) => void;
}

export const NavBarContext = createContext<NavBarContextValue | undefined>(undefined);
