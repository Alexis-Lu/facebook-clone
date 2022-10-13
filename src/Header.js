import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import FlagIcon from "@mui/icons-material/Flag";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import { Avatar, IconButton } from "@mui/material";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import MenuIcon from "@mui/icons-material/Menu";
import MessageIcon from "@mui/icons-material/Message";
import { useStateValue } from "./StateProvider";

export default function Header() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://www.facebook.com/images/fb_icon_325x325.png"
          alt="facebook-logo"
        />
        <div className="header__input">
          <SearchIcon />
          <input placeholder="Rechercher sur Facebook" type="text" />
        </div>
      </div>
      <div className="header__option--container">
        <div className="header__option header__option--active">
          <HomeIcon fontSize="large" />
        </div>
        <div className="header__option">
          <FlagIcon fontSize="large" />
        </div>
        <div className="header__option">
          <SubscriptionsIcon fontSize="large" />
        </div>
        <div className="header__option">
          <StorefrontIcon fontSize="large" />
        </div>
        <div className="header__option">
          <SupervisedUserCircleIcon fontSize="large" />
        </div>
      </div>
      <div className="header__right">
        <div className="header__info">
          <MenuIcon />
        </div>
        <div className="header__info">
          <MessageIcon />
        </div>
        <div className="header__info">
          <NotificationsActiveIcon />
        </div>
        <div className="header__info">
          <Avatar
            style={{
              height: "40px",
              width: "40px",
              marginTop: "5px",
              backgroundColor: "#e4e6eb",
              border: "0.3px solid gray",
              cursor: "pointer",
            }}
            src={user.photoURL}
          />
        </div>
      </div>
    </div>
  );
}
