import { Avatar } from "@mui/material";
import React from "react";
import "./Post.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NearMeIcon from "@mui/icons-material/NearMe";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import NearMeOutlinedIcon from "@mui/icons-material/NearMeOutlined";

export default function Post({
  profilePic,
  image,
  username,
  timestamp,
  message,
}) {
  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profilePic} className="post__avatar" />
        <div className="post__topInfo">
          <h3>{username}</h3>
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
      </div>
      <div className="post__bottom">
        <p>{message}</p>
      </div>
      <div className="post__image">
        <img src={image} alt="" />
      </div>
      <div className="post__stats">
        <div className="post__stat">
          <div className="post__stat__emoji">
            <p className="post__stat__emoji__one">&#129321;</p>
            <p className="post__stat__emoji__two">&#128077;</p>
          </div>
          <p>79</p>
        </div>
        <div className="post__stat">
          <p> 20 commentaires</p>
          <p> 10 partages</p>
        </div>
      </div>
      <div className="post__options">
        <div className="post__option">
          <ThumbUpOutlinedIcon />
          <p>J'aime</p>
        </div>
        <div className="post__option">
          <ChatBubbleOutlineOutlinedIcon />
          <p>Commenter</p>
        </div>
        <div className="post__option">
          <NearMeOutlinedIcon />
          <p>Partager</p>
        </div>
      </div>
    </div>
  );
}
