import React from "react";
import "./Sidebar.css";
import { FiberManualRecord } from "@material-ui/icons";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarHeader">
        <h2>React Slack</h2>
        <h3>
          <FiberManualRecord />
          Safak Kocaoglu
        </h3>
      </div>
    </div>
  );
};

export default Sidebar;
