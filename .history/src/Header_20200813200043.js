import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import { AccessTime, Search, Help } from "@material-ui/icons";

const Header = () => {
  return (
    <div className="header">
      <div className="headerLeft">
        <Avatar className="headerAvatar" alt="Safak" src="safak" />
        <AccessTime />
      </div>
      <div className="headerSearch"></div>
      <Search />
      <input placeholder="Search!" />
      <div className="headerRight">
        <Help />
      </div>
    </div>
  );
};

export default Header;
