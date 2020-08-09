import React from "react";
import Search from "../Search";
import Categories from "../Categories";

const Home = () => {
  return (
    <div className="App">
      <Search />
      <Categories title="Pizza & Noodles" />
    </div>
  );
};

export default Home;
