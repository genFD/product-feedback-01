import React from "react";
import { useGlobalContext } from "../context";
import NavBar from "./NavBar";

const HeaderTest = () => {
  const data = useGlobalContext();
  console.log(data);
  return (
    <div className="laptop:col-span-1 bg-Blood-Moon">
      <NavBar />
    </div>
  );
};

export default HeaderTest;
