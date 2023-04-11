import React, { useContext } from "react";
import classes from "./style/content.module.scss";
import Cards from "./Cards";
import Image from "next/image";
import Zigzag from "assets/svg/Zigzag";
import Rings from "assets/svg/Rings";
import { appContext } from "store/AppContextProvider";
import { motion } from "framer-motion";

const Content = () => {
  const { curruntUser } = useContext(appContext);

  return (
    <motion.section
      initial={{ opacity: 0.5, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeIn" }}
      viewport={{ once: true }}
      id="category"
      className={classes.wrapper}
    >
      <Cards
        ifLogged={true}
        title="GENERAL"
        href="/Genral"
        label="genral stuff"
        style={{
          zIndex: 1,
          left: "2%",
          top: "17%",
        }}
      />

      <Cards
        ifLogged={true}
        title="TOURIST?"
        href="/Tourist"
        label="Tourist"
        style={{
          zIndex: 2,
          left: "16%",
          top: "26%",
        }}
      />
      <Cards
        ifLogged={true}
        title="ESSENTIALS"
        href="/Essentials"
        label="daily needs"
        style={{
          zIndex: 3,
        }}
      />
      <Cards
        ifLogged={true}
        title="COMMUNITY"
        href="#community"
        label="community"
        style={{
          zIndex: 4,
          right: "16%",
          bottom: "26%",
        }}
      />
      <Cards
        ifLogged={curruntUser ? true : false}
        title="ADD BUSINESSES"
        href="/AddBusinesses"
        label="addbusniess"
        style={{
          zIndex: 5,
          right: "2%",
          bottom: "17%",
        }}
      />
      <Zigzag className={classes.zigzag} />
      <Rings className={classes.rings} />
    </motion.section>
  );
};

export default Content;
