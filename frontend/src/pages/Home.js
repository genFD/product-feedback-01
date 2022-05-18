import React from "react";
import ContentTest from "../components/ContentTest";
// import Header from "../components/Header";
import HeaderTest from "../components/HeaderTest";
import Sidebartest from "../components/Sidebartest";
// import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div className="h-full laptop:grid-rows-2 laptop:grid laptop:grid-cols-3">
      <HeaderTest />
      <ContentTest />
    </div>
  );
};

export default Home;
