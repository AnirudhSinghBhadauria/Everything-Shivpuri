import React from "react";
import classes from "./style/cards.module.scss";
import { RegularBold, RegularMedium, RegularSemiBold } from "@/assets/Fonts/fonts";
import ButtonLink from "../Helper/ButtonLink";
import IceCream from "@/assets/svg/IceCream";

const Cards = (props) => {
  return (
    <section style={props.style} className={classes.card}>
      <div>
        <h1 className={RegularMedium.className}>{props.title}</h1>
        <IceCream className={classes.arrow} fill="black" />
      </div>
      <ButtonLink
        className={`${RegularBold.className} ${classes.button}`}
        buttonStyle={classes.buttons}
        href={props.href}
        label={props.label}
      >
        DETAILS
      </ButtonLink>
    </section>
  );
};

export default Cards;
