import React from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";

export default function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        profilePic="https://img.freepik.com/vecteurs-premium/profil-avatar-homme-icone-ronde_24640-14044.jpg"
        timestamp="This is a timestamp"
        message="THIS IS ME !"
        username="Alexis Lu"
        image="https://i.kym-cdn.com/photos/images/facebook/001/896/232/2a0.jpg"
      />
      <Post />
      <Post />
    </div>
  );
}
