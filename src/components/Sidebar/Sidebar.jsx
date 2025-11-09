import React from "react";
import "./Sidebar.css";
import {
  House,
  Gamepad2,
  Car,
  Volleyball,
  Tv,
  GitCompareArrows,
  Music4,
  MonitorSmartphone,
  Newspaper,
} from "lucide-react";
import User from "../../assets/User.jpeg";
import User_1 from "../..//assets/User_1.jpeg";
import User_2 from "../../assets/User_2.jpeg";
import User_3 from "../../assets/User_3.jpeg";
import User_4 from "../../assets/User_4.jpeg";

const Sidebar = ({ sidebar }) => {
  return (
    <div className={`sidebar ${sidebar ? "sidebar" : "small-sidebar"}`}>
      <div className="shortcut-links">
        <div className="side-links">
          <div className="icon">
            <House />
          </div>
          <p>Home</p>
        </div>
        <div className="side-links">
          <div className="icon">
            <Gamepad2 />
          </div>
          <p>Game</p>
        </div>
        <div className="side-links">
          <div className="icon">
            <Car />
          </div>
          <p>Automobile</p>
        </div>
        <div className="side-links">
          <div className="icon">
            <Volleyball />
          </div>
          <p>Sports</p>
        </div>
        <div className="side-links">
          <div className="icon">
            <Tv />
          </div>
          <p>Entertainment</p>
        </div>
        <div className="side-links">
          <div className="icon">
            <GitCompareArrows />
          </div>
          <p>Technology</p>
        </div>
        <div className="side-links">
          <div className="icon">
            <Music4 />
          </div>
          <p>Music</p>
        </div>
        <div className="side-links">
          <div className="icon">
            <MonitorSmartphone />
          </div>
          <p>Blogs</p>
        </div>
        <div className="side-links">
          <div className="icon">
            <Newspaper />
          </div>
          <p>News</p>
        </div>
        <hr />
      </div>
      <div className="subscribed-list">
        <h3>Subscribed</h3>
        <div className="side-links">
          <img src={User} alt="" />
          <p>PawPearShow</p>
        </div>
        <div className="side-links">
          <img src={User_1} alt="" />
          <p>MrBeast</p>
        </div>
        <div className="side-links">
          <img src={User_4} alt="" />
          <p>Technical Guruji</p>
        </div>
        <div className="side-links">
          <img src={User_3} alt="" />
          <p>Coding Tech</p>
        </div>
        <div className="side-links">
          <img src={User} alt="" />
          <p>CarryMinati</p>
        </div>
        <div className="side-links">
          <img src={User_2} alt="" />
          <p>BB Ki Vines</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
