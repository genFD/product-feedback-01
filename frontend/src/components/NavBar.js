import React from "react";
import { useGlobalContext } from "../context";
import Keywords from "./Keywords";
import Roadmap from "./Roadmap";

const Navbar = () => {
  const { openSidebar, closeSidebar, isSidebarOpen } = useGlobalContext();
  return (
    <nav className="nav h-72 flex items-center justify-center tablet:h-auto">
      <div className="nav-center flex justify-between tablet:items-center tablet:justify-center tablet:gap-x-2 laptop:flex-col laptop:gap-y-6 desktop:items-end laptop:items-end">
        <div className="logo tablet:w-56 tablet:h-44 tablet:rounded-default tablet:flex tablet:items-center tablet:justify-center ">
          <h1 className="text-white font-bold text-body-2">Feedback Board</h1>
        </div>
        {isSidebarOpen ? (
          <button className="tablet:hidden" onClick={closeSidebar}>
            <svg width="18" height="17" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15.01.368l2.122 2.122-6.01 6.01 6.01 6.01-2.122 2.122L9 10.622l-6.01 6.01L.868 14.51 6.88 8.5.87 2.49 2.988.368 9 6.38 15.01.37z"
                fill="#FFF"
                fillRule="evenodd"
              />
            </svg>
          </button>
        ) : (
          <button className="tablet:hidden" onClick={openSidebar}>
            <svg width="20" height="17" xmlns="http://www.w3.org/2000/svg">
              <g fill="#FFF" fillRule="evenodd">
                <path d="M0 0h20v3H0zM0 7h20v3H0zM0 14h20v3H0z" />
              </g>
            </svg>
          </button>
        )}
        <div className="keywords">
          <Keywords />
        </div>
        <div className="roadmap">
          <Roadmap />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
