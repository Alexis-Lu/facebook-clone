import { Avatar } from "@mui/material";
import React from "react";
import "./SidebarRow.css";

export default function SideBarRow({ src, Icon, title }) {
  return (
    <div className="sidebarRow">
      {src && (
        <Avatar
          src={src}
          style={{ width: "28px", height: "28px", border: "0.3px solid" }}
        />
      )}
      {Icon && <Icon style={{ width: "28px", height: "28px" }} />}
      <h4>{title}</h4>
    </div>
  );
}
