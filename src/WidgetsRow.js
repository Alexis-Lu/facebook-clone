import { Avatar } from "@mui/material";
import React from "react";
import "./WidgetsRow.css";

export default function WidgetsRow({ profileSrc, name, Icon }) {
  return (
    <div className="WidgetsRow">
      {profileSrc && (
        <Avatar src={profileSrc} style={{ width: "28px", height: "28px" }} />
      )}
      {Icon && <Icon style={{ width: "28px", height: "28px" }} />}
      <h3>{name}</h3>
    </div>
  );
}
