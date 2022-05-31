import React from "react";
import { useGlobalContext } from "../context";
import Roadmap from "./Roadmap";
import Keywords from "./Keywords";
import LoginStation from "./LoginStation";

//add animation for sidebar
const Sidebar = () => {
  const { isSidebarOpen } = useGlobalContext();
  return (
    isSidebarOpen && (
      <aside
        className={`${
          isSidebarOpen ? "sidebar_cont show_sidebar_cont" : "sidebar_cont"
        }`}
      >
        <div className=" bg-Ghost-White flex flex-col items-center gap-6 pt-6 relative shadow-md sidebar">
          <Keywords />
          <Roadmap />
        </div>
      </aside>
    )

    // <aside className="flex bg-Singapore-Orchid flex-col gap-6 w-271  h-screen tablet:w-fit tablet:h-auto tablet:flex-row tablet:gap-4  ">
    //   <div className=" w-56 h-178 rounded-default ">Sidebar</div>
    //   <div className=" w-56 h-178 rounded-default ">Sidebar</div>
    // </aside>
  );
};

export default Sidebar;
