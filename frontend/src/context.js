import React, { useState, useContext, createContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setOpenSideBar] = useState(false);

  const openSidebar = () => {
    setOpenSideBar(true);
  };
  const closeSidebar = () => {
    setOpenSideBar(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
