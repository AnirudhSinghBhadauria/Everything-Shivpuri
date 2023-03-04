import React from "react";
import classes from "./style/content.module.scss";
import Cards from "./Cards";
import Image from "next/image";

const Content = () => {
  return (
    <section className={classes.wrapper}>
      <Cards
        title="GENRAL"
        href="/Genral"
        label="genral stuff"
        style={{
          backgroundColor: "hsl(100, 100%, 100%)",
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
          backgroundColor: "hsl(211, 54%, 75%)",
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
        title="FEATURINGS"
        href="/Featured"
        label="Featured"
        style={{
          backgroundColor: "hsl(66, 100%, 72%)",
          zIndex: 4,
          right: "16%",
          bottom: "26%",
        }}
      />
      <Cards
        title="COMMUNITY"
        href="#"
        label="community"
        style={{
          backgroundColor: "hsl(262, 97%, 76%)",
          zIndex: 5,
          right: "2%",
          bottom: "17%",
        }}
      />
    </section>
  );
};

export default Content;
