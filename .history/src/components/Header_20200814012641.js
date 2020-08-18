import React, { useContext } from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import { AccessTime, Search, HelpOutline } from "@material-ui/icons";
import { AuthContext } from "../context/AuthContext";

const Header = () => {

  const {currentUser} = useContext(AuthContext)
  return (
    <div className="header">
      <div className="headerLeft">
        <Avatar className="headerAvatar" alt={currentUser?.displayName} src={currentUser?.photoURL} />
        <AccessTime />
      </div>
      <div className="headerSearch">
        <Search />
        <input placeholder="Search!" />
      </div>
      <div className="headerRight">
        <HelpOutline />
      </div>
    </div>
  );
};

export default Header;
