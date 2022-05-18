import React from "react";
import Content from "../components/Content";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="home laptop:grid-rows-1 laptop:grid laptop:grid-cols-3 desktop:grid-cols-4 tablet:grid tablet:grid-rows-4">
      <Header />
      <Content />
    </div>
  );
};

export default Home;
