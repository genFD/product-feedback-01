import React, { useState, useContext, createContext } from "react";
import { data } from "./data";

const AppContext = createContext();

const requests = data.productRequests.filter(
  (item) => item.status !== "suggestion"
);

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setOpenSideBar] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);
  const [checked, setChecked] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [empty, setEmpty] = useState(false);
  const [requestsList, setRequestsList] = useState(requests);
  const [usersData, setUsersData] = useState(data);

  const openSidebar = () => {
    setOpenSideBar(true);
  };
  const closeSidebar = () => {
    setOpenSideBar(false);
  };

  return (
    <AppContext.Provider
      value={{
        usersData,
        setUsersData,
        empty,
        setEmpty,
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        showDropDown,
        setShowDropDown,
        checked,
        setChecked,
        dropDown,
        setDropDown,
        requestsList,
        setRequestsList,
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
