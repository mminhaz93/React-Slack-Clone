import React from "react";
import "./SidebarOption.css";

const SidebarOption = ({ Icon, title }) => {
  return (
    <div className="sidebarOption">
      {Icon && <Icon className="sidebarOptionIcon" />}
      {Icon ? <h3 className="SidebarOptionChannel">{title}</h3> : <h3 className="SidebarOptionChannel"><span className="SidebarOptionHash">#</span> {title}</h3>}
    </div>
  );
};

export default SidebarOption;
