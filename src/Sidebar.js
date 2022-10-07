import ChatIcon from "@mui/icons-material/Chat";
import StorefrontIcon from "@mui/icons-material/Storefront";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PeopleIcon from "@mui/icons-material/People";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlags";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import GroupsIcon from "@mui/icons-material/Groups";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import RestoreIcon from "@mui/icons-material/Restore";
import React from "react";
import "./Sidebar.css";
import SideBarRow from "./SidebarRow";
import { Avatar } from "@mui/material";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <SideBarRow
        title="Alexis Lu"
        src="https://img.freepik.com/vecteurs-premium/profil-avatar-homme-icone-ronde_24640-14044.jpg"
      />
      <SideBarRow Icon={PeopleIcon} title="Amis" />
      <SideBarRow Icon={GroupsIcon} title="Groupes" />
      <SideBarRow Icon={StorefrontIcon} title="Marketplace" />
      <SideBarRow Icon={LiveTvIcon} title="Watch" />
      <SideBarRow Icon={RestoreIcon} title="Souvenirs" />
      <SideBarRow Icon={ExpandMoreIcon} title="Voir plus" />

      <div className="sidebar__horizontalBar"></div>
      <h4 className="sidebar__vr">Vos raccourcis</h4>
      <SideBarRow
        src="https://play-lh.googleusercontent.com/bPz1guJ6FHF3oIOEy3KqwpaDDKO-hLRaZoyzmM8bLFLN8fWm6L0_EuUnkwv9iqPo3Ag"
        title="8 Ball Pool"
      />
      <SideBarRow
        src="https://play-lh.googleusercontent.com/TLUeelx8wcpEzf3hoqeLxPs3ai1tdGtAZTIFkNqy3gbDp1NPpNFTOzSFJDvZ9narFS0"
        title="Candy Crush Saga"
      />
      <SideBarRow
        src="https://play-lh.googleusercontent.com/45xTSQTckXkii8Ma8WBsM_Q7EyTIfLZKPRXzj1v08ctle3Se7PRk3OtIrujzRYOM_KY"
        title="Cookie Clickers"
      />
      <SideBarRow
        src="https://play-lh.googleusercontent.com/TItrElwgZA_HrBjeGeG8SOtUkd7jvhLJPMMXBhI-MYpoFp4JSjlZlXpKTQ_E-VCpdgs"
        title="Dragon City"
      />
      <SideBarRow
        src="https://play-lh.googleusercontent.com/Z211XzWb-G4qJBVKS2lJnY7cgCP-9CcjNhM9jFeMDhq_8_mdEKkd23g1h27cmUQMZGo"
        title="Soccers Stars"
      />
      <SideBarRow Icon={ExpandMoreIcon} title="Voir plus" />
      <div className="Sidebar__policy">
        <ul>
          <li>
            <span>Confidentialité</span>
          </li>
          <li>
            <span>Conditions générales</span>
          </li>
          <li>
            <span>Publicités</span>
          </li>
          <li>
            <span>Choix publicitaires</span>
          </li>
          <li>
            <span>Cookies</span>
          </li>
          <li>
            <span>Plus</span>
          </li>
          <li>
            <span>Meta 2022</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
