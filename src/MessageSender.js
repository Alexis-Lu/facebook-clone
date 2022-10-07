import { Avatar } from "@mui/material";
import React, { useState } from "react";
import "./MessageSender.css";
import VideocamIcon from "@mui/icons-material/Videocam";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";

export default function MessageSender() {
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setInput("");
  };

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src="https://img.freepik.com/vecteurs-premium/profil-avatar-homme-icone-ronde_24640-14044.jpg" />
        <form>
          <input
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            className="messageSender__input"
            type="text"
            placeholder="Quoi de neuf, Alexis ?"
          />

          <button onClick={handleSubmit} type="submit"></button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Vidéo en direct</h3>
        </div>
        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo / vidéo</h3>
        </div>
        <div className="messageSender__option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Humeur / Activité</h3>
        </div>
      </div>
    </div>
  );
}
