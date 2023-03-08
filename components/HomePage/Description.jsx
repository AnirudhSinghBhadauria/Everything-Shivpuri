import { Regular, RegularMedium } from "./../../assets/Fonts/fonts";
import React from "react";
import ButtonLink from "../Helper/ButtonLink";
import classes from "./style/description.module.scss";

const Description = (props) => {
  return (
    <section className={classes.descContainer}>
      <div>
        <ButtonLink
          href={props.path}
          label={props.label}
          className={`${Regular.className} ${classes.titleName}`}
        >
          {props.main}
        </ButtonLink>
        <p className={`${RegularMedium.className} ${classes.secondary}`}>
          {props.secondary}
        </p>
      </div>
      <p className={`${classes.desc} ${Regular.className}`}>{props.desc}</p>
    </section>
  );
};

export default Description;
