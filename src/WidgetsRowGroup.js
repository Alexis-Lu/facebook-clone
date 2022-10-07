import React from "react";
import { Avatar } from "@mui/material";
import "./WidgetsRowGroup.css";

export default function WidgetsRowGroup({ imageUrl1, imageUrl2, groupName }) {
  return (
    <div className="widgetsRowGroup">
      <div className="widgetsRowGroup__avatar">
        <Avatar
          src={imageUrl1}
          className="widgetsRowGroup__image1"
          style={{ width: "18px", height: "18px" }}
        />
        <Avatar
          src={imageUrl2}
          className="widgetsRowGroup__image2"
          style={{ width: "18px", height: "18px" }}
        />
      </div>
      <div>
        <h3>{groupName}</h3>
      </div>
    </div>
  );
}
