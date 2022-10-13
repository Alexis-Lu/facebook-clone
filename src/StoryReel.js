import React from "react";
import { useStateValue } from "./StateProvider";
import Story from "./Story";
import "./StoryReel.css";

export default function StoryReel() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="storyReel">
      <div className="storyReel__top">
        <h3 className="storyReel__top--active">Stories</h3>
        <h3>Reels</h3>
        <h3>Salons</h3>
      </div>
      <div className="storyReel__content">
        <Story
          image="https://images.unsplash.com/photo-1565992441121-4367c2967103?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2tpfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          profileSrc={user.photoURL}
          title={user.displayName}
        />
        <Story
          image="https://www.journaldugeek.com/content/uploads/2021/10/template-jdg-56.jpg"
          profileSrc="https://upload.wikimedia.org/wikipedia/commons/c/c4/Mark_Zuckerberg_F8_2018_Keynote_%28cropped%29.jpg"
          title="Mark Zuckerberg"
        />
        <Story
          image="https://pbs.twimg.com/media/FcKwVIQacAA6xhU?format=jpg&name=medium"
          profileSrc="https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/d/9/a/d9a1058910_50163142_elon-musk1.jpg"
          title="Elon Musk"
        />
        <Story
          image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-model-unselect-gallery-1-202209?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1660753619946"
          profileSrc="http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSzi4MKcDFAkft1kjI0VUsRjeV8CynCBFhYY-NqokWd-RP2L21Ud_uBQid_CRyI8yCx"
          title="Tim Cook"
        />
      </div>
    </div>
  );
}
