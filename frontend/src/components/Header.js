import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Header = () => {
  return (
    <header className="header_cont tablet:py-11 laptop:pt-24">
      <Navbar />
      <Sidebar />
    </header>
  );
};

export default Header;
