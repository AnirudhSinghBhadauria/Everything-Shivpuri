import About from "assets/svg/About";
import Contact from "assets/svg/Contact";
import ES from "assets/svg/ES";
import Essentials from "assets/svg/Essentials";
import Genral from "assets/svg/Genral";
import ButtonLink from "components/Helper/ButtonLink";
import React from "react";
import classes from "../UI/style/bar.module.scss";

const Bar = () => {
  return (
    <section className={classes.bar}>
      <ES fill="white" />
    </section>
  );
};

export default Bar;
