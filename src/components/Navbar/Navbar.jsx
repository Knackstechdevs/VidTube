import React from "react";
import "./Navbar.css";
import { Menu, Search, LayoutPanelTop, Bell } from "lucide-react";
import Logo_1 from "../../assets/Logo_1.png";
import User from "../../assets/User.jpeg";
import Upload from "../../assets/Upload.png";
import { Link } from "react-router-dom";

const Navbar = ({setSidebar}) => {
  return (
    <div className="navbar flex-div">
      <div className="nav-left flex-div">
        <div onClick={()=>setSidebar(prev => prev === false ? true : false)} className="icon">
          <Menu />
        </div>
        <Link to="/"><img className="logo" src={Logo_1} alt="" /></Link>
      </div>
      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type="text" placeholder="Search" />
          <div className="icon">
            <Search />
          </div>
        </div>
      </div>
      <div className="nav-right flex-div">
        <img src={Upload} alt="" />
        <div className="icon">
          <LayoutPanelTop />
        </div>
        <div className="icon">
          <Bell />
        </div>
          <img src={User} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
