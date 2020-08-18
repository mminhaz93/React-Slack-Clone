import React from "react";
import "./Sidebar.css";
import { FiberManualRecord, Create } from "@material-ui/icons";

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
        <Create/> 
      </div>
    </div>
  );
};

export default Sidebar;
