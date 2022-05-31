import React, { useState, useContext, createContext, useEffect } from "react";
import { data } from "./data";
import axios from "axios";
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
  const [showReplyInput, setShowReplyInput] = useState(false);
  const [requestsList, setRequestsList] = useState([]);
  const [usersData, setUsersData] = useState(data);

  const fetchRequests = async () => {
    const { data } = await axios.get(`http://localhost:4000/api/feedbacks`);
    setRequestsList(data);
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  const openSidebar = () => {
    setOpenSideBar(true);
  };
  const closeSidebar = () => {
    setOpenSideBar(false);
  };
  const suggestions = requestsList.filter(
    (item) => item.status === "suggestion"
  );

  return (
    <AppContext.Provider
      value={{
        suggestions,
        showReplyInput,
        setShowReplyInput,
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
