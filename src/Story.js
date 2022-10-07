import { Avatar } from "@mui/material";
import React from "react";
import "./Story.css";

export default function Story({ image, profileSrc, title }) {
  return (
    <div style={{ backgroundImage: `url(${image})` }} className="story">
      <Avatar
        className="story__avatar"
        src={profileSrc}
        style={{ height: "35px", width: "35px" }}
      />
      <h4>{title}</h4>
    </div>
  );
}
