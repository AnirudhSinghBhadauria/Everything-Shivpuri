import React from "react";
import classes from "./style/footerCard.module.scss";
import { RegularSemiBold, Regular } from "@/assets/Fonts/fonts";
import IceCream from "@/assets/svg/IceCream";
import CardLink from "../Helper/CardLink";

const FooterCard = (props) => {
  return (
    <CardLink
      label={props.label}
      href={`${props.path}`}
      style={{ backgroundColor: `${props.back}` }}
      className={classes.cardContainer}
    >
      <div>
        <p
          style={{ color: `${props.color}` }}
          className={RegularSemiBold.className}
        >
          {props.head}
        </p>
        <IceCream fill={`${props.color}`} />
      </div>
      <h2 style={{ color: `${props.color}` }} className={Regular.className}>
        {props.foot}
      </h2>
    </CardLink>
  );
};

export default FooterCard;
