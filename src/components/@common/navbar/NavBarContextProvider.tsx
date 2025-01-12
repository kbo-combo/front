import React, { useState } from "react";
import { NavBarContext } from "./NavBarContext";

export const NavBarProvider = ({ children }: { children: React.ReactNode }) => {
  const [navBarOpen, setNavBarOpen] = useState(true);

  const showNavBar = (isOpen: boolean) => setNavBarOpen(isOpen);

  return (
      <NavBarContext.Provider value={{ navBarOpen, showNavBar }}>
        {children}
      </NavBarContext.Provider>
  );
};
