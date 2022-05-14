import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full mb-10 text-center p-7 bg-Singapore-Orchid">
      <Link className="text-6xl text-white hover:text-gray-200" to="/">
        Feedback Board
      </Link>
    </header>
  );
};

export default Header;
