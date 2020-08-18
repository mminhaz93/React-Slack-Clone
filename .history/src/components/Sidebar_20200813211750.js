import React from "react";
import "./Sidebar.css";
import { FiberManualRecord, Create, InsertComment } from "@material-ui/icons";
import SidebarOption from "./SidebarOption";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarHeader">
        <div className="sidebarInfo">
          <h2>React Slack</h2>
          <h3>
            <FiberManualRecord />
            Safak Kocaoglu
          </h3>
        </div>
        <Create />
      </div>
        <SidebarOption Icon={InsertComment} title="Threads" />
    </div>
  );
};

export default Sidebar;
