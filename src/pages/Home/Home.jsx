import React from "react";
import "./Home.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Feed from "../../components/Feed/Feed.jsx";

const Home = ({ sidebar }) => {
  return (
    <div className="home">
      <Sidebar sidebar={sidebar} />
      <div className={`container ${sidebar ? "" : "large-container"}`}>
        <Feed />
      </div>
    </div>
  );
};

export default Home;
