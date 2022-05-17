import React from "react";
import { useGlobalContext } from "../context";
import bgHeaderMobile from "../img/mobile/background-header.png";
import bgHeaderTablet from "../img/tablet/background-header.png";
import bgHeaderDesktop from "../img/desktop/background-header.png";

const NavBar = () => {
  const { openSidebar, closeSidebar } = useGlobalContext();
  return (
    <nav className="nav h-72 flex items-center justify-center relative ">
      <div className="nav-center w-11/12 max-w-3xl bg-Singapore-Orchid">
        <div className="nav-header flex justify-between items-center">
          <div>Logo</div>
          <button onClick={openSidebar}>NavButton</button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
