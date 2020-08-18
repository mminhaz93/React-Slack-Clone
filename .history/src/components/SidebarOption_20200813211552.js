import React from "react";
import "./SidebarOption.css";

const SidebarOption = ({Icon,title}) => {
  return <div className="sidebarOption">
      {Icon && <Icon/>}
  </div>;
};

export default SidebarOption;
