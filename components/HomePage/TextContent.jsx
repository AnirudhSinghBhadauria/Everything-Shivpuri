import React from "react";
import Description from "./Description";
import classes from "./style/text.module.scss";

const TextContnet = () => {
  return (
    <section className={classes.wrapper}>
      <Description
        label="GENRAL"
        path="/Genral"
        main="GENRAL"
        secondary="C.III S.IX"
        desc="Genral knowledge everybody need to know about Shivpuri! Religious Places,
            Educational Institues, and other general things Exist in this section! "
      />
      <Description
        label="TOURIST"
        path="/Tourist"
        main="TOURIST?"
        secondary="C.XI S.XIX"
        desc="Everything a Tourist who's coming for the first time Needs to know! From Hotels to Tourist Spots, Theaters, Traveling Coviniences and Food Outlets for you to enjoy."
      />
      <Description
        label="ESSENTIALS"
        path="/Essentials"
        main="ESSENTIALS"
        secondary="C.IX S.II"
        desc="Some Nice to know Essential Services everybody including Localites needs to know. This Section Includes Electronic Stores, Garment stores, Saloon and Supermarkets."
      />
      <Description
        label="FEATURED"
        path="/Featured"
        main="FEATURED"
        secondary="C.XXI S.XXXII"
        desc="Some Important Places we wanted to mention! This section Features two places UIT RGPV Shivpuri and Architectural Brilliance Chatri, more Details available in this section."
      />
    </section>
  );
};

export default TextContnet;
