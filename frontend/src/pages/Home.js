import React from "react";
import ContentTest from "../components/ContentTest";
// import Header from "../components/Header";
import HeaderTest from "../components/HeaderTest";
import Sidebartest from "../components/Sidebartest";
// import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div className=" tablet:grid tablet:grid-cols-1 tablet:grid-rows-2 laptop:grid laptop:grid-cols-3 gap-4">
      <HeaderTest />
      {/* <Sidebartest /> */}
      <ContentTest />
      {/* <Sidebar /> */}
    </div>
  );
};

export default Home;
