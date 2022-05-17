import React, { useState, useEffect } from "react";
import bgHeaderMobile from "../img/mobile/background-header.png";
import bgHeaderTablet from "../img/tablet/background-header.png";
import bgHeaderDesktop from "../img/desktop/background-header.png";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 679) {
        setMenuOpen(true);
      } else {
        setMenuOpen(false);
      }
    });

    // return () => {
    //   second;
    // };
  }, [menuOpen]);

  return (
    <header className="flex flex-col tablet:flex-row">
      <section className="nav_header transition-all duration-200 border relative">
        <picture>
          <source srcSet={bgHeaderDesktop} media="(min-width:1024px)" />
          <source srcSet={bgHeaderTablet} media="(min-width:768px)" />
          <source srcSet={bgHeaderMobile} media="(max-width:679px)" />
          <img src={bgHeaderMobile} alt="test" />

          <source />
        </picture>
        <div className="nav_content absolute w-full h-full flex items-center justify-between px-6">
          <h2>Logo</h2>
          <button onClick={() => setMenuOpen(!menuOpen)}>Nav_button</button>
        </div>
      </section>
      {menuOpen && (
        <section className="sidebar w-64 h-full bg-Singapore-Orchid self-end">
          <div>Ux tags</div>
          <div>Roadmap</div>
        </section>
      )}
    </header>
  );
};

export default Header;
