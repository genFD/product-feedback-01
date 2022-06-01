import React, { useEffect } from "react";
import Content from "../components/Content";
import Header from "../components/Header";
import { useGlobalContext } from "../context";

const Home = () => {
  return (
    <div className="home laptop:flex laptop: gap-x-6 laptop:flex-row desktop:flex tablet:flex tablet:flex-col">
      <Header />
      <Content />
    </div>
  );
};

export default Home;
