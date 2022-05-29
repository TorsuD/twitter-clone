import React from "react";
import "./SidebarOptions.css";

function SidebarOptions({ active, text, icon }) {
  return (
    <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
      {icon}
      <h2>{text}</h2>
    </div>
  );
}

export default SidebarOptions;
