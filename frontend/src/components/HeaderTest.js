import React from "react";
import { useGlobalContext } from "../context";
import NavBar from "./NavBar";
import Sidebar from "./Sidebar";

const HeaderTest = () => {
  const data = useGlobalContext();
  console.log(data);
  return (
    <>
      <NavBar />
      <Sidebar />
    </>
  );
};

export default HeaderTest;
