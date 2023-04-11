import React from "react";
import Description from "./Description";
import classes from "./style/text.module.scss";
import {motion} from 'framer-motion'

const TextContnet = () => {
  return (
    <motion.section
      initial={{ opacity: 0.5, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeIn" }}
      viewport={{ once: true }}
      className={classes.wrapper}
    >
      <Description
        link
        label="GENRAL"
        path="/Genral"
        main="GENERAL"
        secondary="C.III S.IX"
        desc="Genral knowledge everybody need to know about Shivpuri! Religious Places,
            Educational Institues, and other general things Exist in this section!"
      />
      <Description
        link
        label="TOURIST"
        path="/Tourist"
        main="TOURIST"
        secondary="C.XI S.XIX"
        desc="Everything a Tourist Needs to know! From Hotels to Tourist Spots, Theaters, Traveling Coviniences and Food Outlets for you to experience and enjoy."
      />
      <Description
        link
        label="ESSENTI."
        path="/Essentials"
        main="ESSENTI."
        secondary="C.IX S.II"
        desc="Some Nice to know Essential Services everybody needs to know. This Section Includes Electronic Stores, Garment stores, Saloon and Supermarkets."
      />
      <Description
        label="ADD BUSINESS"
        path="/AddBusinesses"
        main="ADDBUS."
        secondary="C.XXI S.XXXII"
        desc="Didn't Got what you were lookin for? Maybe we missed it, but don't worry you can add it yourself in Add Businesses, You must login first."
      />
    </motion.section>
  );
};

export default TextContnet;
