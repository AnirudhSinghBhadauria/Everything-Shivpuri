import React from "react";
import classes from "./style/content.module.scss";
import Cards from "./Cards";
import Image from "next/image";
import Zigzag from "assets/svg/Zigzag";
import Rings from "assets/svg/Rings";

const Content = () => {
  return (
    <section id="category" className={classes.wrapper}>
      <Cards
        title="GENRAL"
        href="/Genral"
        label="genral stuff"
        style={{
          backgroundColor: "white",
          zIndex: 1,
          left: "2%",
          top: "17%",
        }}
      />

      <Cards
        title="TOURIST?"
        href="/Tourist"
        label="Tourist"
        style={{
          backgroundColor: "hotpink",
          zIndex: 2,
          left: "16%",
          top: "26%",
        }}
      />
      <Cards
        title="ESSENTIALS"
        href="/Essentials"
        label="daily needs"
        style={{ backgroundColor: "hsl(14, 99%, 50%)", zIndex: 3 }}
      />
      <Cards
        title="COMMUNITY"
        href="#community"
        label="community"
        style={{
          backgroundColor: "hsl(262, 97%, 76%)",
          zIndex: 4,
          right: "16%",
          bottom: "26%",
        }}
      />
      <Cards
        title="ADD BUSINESSES"
        href="/AddBusinesses"
        label="addbusniess"
        style={{
          backgroundColor: "hsl(66, 100%, 72%)",
          zIndex: 5,
          right: "2%",
          bottom: "17%",
        }}
      />
      <Zigzag className={classes.zigzag} />
      <Rings className={classes.rings} />
    </section>
  );
};

export default Content;
