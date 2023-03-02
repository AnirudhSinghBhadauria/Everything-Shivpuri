import React from "react";
import {
  RegularMedium,
  RegularBold,
} from "@/assets/Fonts/fonts";
import classes from "./style/line.module.scss";
import ButtonLink from "../Helper/ButtonLink";

const LineCard = (props) => {
  return (
    <section className={classes.cardWrapper}>
      <div></div>
      <p className={RegularMedium.className}>{props.message}</p>
      <p className={RegularMedium.className}>{props.title}</p>
      <ButtonLink
        href={props.href}
        label={props.label}
        className={`${RegularBold.className} ${classes.button}`}
      >
        DETAILS
      </ButtonLink>
    </section>
  );
};

export default LineCard;
