import React from "react";
import classes from "./style/intro.module.scss";
import { Regular, RegularMedium, RegularSemiBold } from "assets/Fonts/fonts";
import Image from "next/image";

const IntroSection = ({ background, color, heading, desc }) => {
  return (
    <section
      style={{
        background: `url(${background}) center/cover`,
        color: `${color}`,
      }}
      className={classes.intro}
    >
      <div>
        <h1 className={Regular.className}>{heading}</h1>
        <p className={RegularMedium.className}>{desc}</p>
        <span className={RegularSemiBold.className}>everything.shivpuri</span>
      </div>
    </section>
  );
};

export default IntroSection;
