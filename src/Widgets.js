import React from "react";
import "./Widgets.css";
import WidgetsRow from "./WidgetsRow";
import WidgetsRowGroup from "./WidgetsRowGroup";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import SearchIcon from "@mui/icons-material/Search";
import LinearScaleIcon from "@mui/icons-material/LinearScale";
import AddCircleIcon from "@mui/icons-material/AddCircle";

export default function Widgets() {
  return (
    <div className="widgets">
      <h3 className="widgets__sponsorise">Sponsorisé </h3>
      <div className="widgets__bar"></div>
      <div className="widgets__contacts">
        <div className="widgets__contacts__container">
          <div>
            <h3 className="contacts">Contact</h3>
          </div>
          <div>
            <VideoCallIcon />
            <SearchIcon />
            <LinearScaleIcon />
          </div>
        </div>
        <WidgetsRow
          profileSrc="https://upload.wikimedia.org/wikipedia/commons/c/c4/Mark_Zuckerberg_F8_2018_Keynote_%28cropped%29.jpg"
          name="Mark Zuckerberg"
        />
        <WidgetsRow
          profileSrc="https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/d/9/a/d9a1058910_50163142_elon-musk1.jpg"
          name="Elon Musk"
        />
        <WidgetsRow
          profileSrc="http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSzi4MKcDFAkft1kjI0VUsRjeV8CynCBFhYY-NqokWd-RP2L21Ud_uBQid_CRyI8yCx"
          name="Tim Cook"
        />
      </div>
      <div className="widgets__bar"></div>
      <h3 className="widgets__cdg">Conversations de groupe</h3>
      <WidgetsRowGroup
        imageUrl1="http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSzi4MKcDFAkft1kjI0VUsRjeV8CynCBFhYY-NqokWd-RP2L21Ud_uBQid_CRyI8yCx"
        imageUrl2="https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/d/9/a/d9a1058910_50163142_elon-musk1.jpg"
        groupName="Tim Cook et Elon Musk"
      />
      <WidgetsRowGroup
        imageUrl1="https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/d/9/a/d9a1058910_50163142_elon-musk1.jpg"
        imageUrl2="https://upload.wikimedia.org/wikipedia/commons/c/c4/Mark_Zuckerberg_F8_2018_Keynote_%28cropped%29.jpg"
        groupName="Millionnaires"
      />
      <WidgetsRow Icon={AddCircleIcon} name="Créer un groupe" />
    </div>
  );
}
