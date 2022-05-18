import React from "react";
import { useGlobalContext } from "../context";
import Keywords from "./Keywords";
import Roadmap from "./Roadmap";

const Sidebar = () => {
  const { isSidebarOpen } = useGlobalContext();
  return (
    isSidebarOpen && (
      <aside
        className={`${
          isSidebarOpen ? "sidebar_cont show_sidebar_cont" : "sidebar_cont"
        }`}
      >
        <div className=" bg-Cotton-Ball flex flex-col items-center gap-6 pt-6 relative shadow-md sidebar">
          <div className="tablet:block w-56 h-44 bg-Blood-Moon text-Raven-Night">
            Keyword
          </div>
          <div className="w-56 h-44 bg-Blue-Mana text-white tablet:block">
            Roadmap
          </div>
        </div>
      </aside>
    )

    // <aside className="flex bg-Singapore-Orchid flex-col gap-6 w-271 border h-screen tablet:w-fit tablet:h-auto tablet:flex-row tablet:gap-4  ">
    //   <div className="border w-56 h-178 rounded-default ">Sidebar</div>
    //   <div className="border w-56 h-178 rounded-default ">Sidebar</div>
    // </aside>
  );
};

export default Sidebar;
