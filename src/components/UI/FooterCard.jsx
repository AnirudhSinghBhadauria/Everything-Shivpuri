import React from "react";
import classes from "./style/footerCard.module.scss";
import { RegularSemiBold, Regular, RegularMedium } from "@/assets/Fonts/fonts";
import IceCream from "@/assets/svg/IceCream";
import Link from "next/link";

const FooterCard = (props) => {
  return (
    <Link href={`${props.path}`}>
      <div
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
      </div>
    </Link>
  );
};

export default FooterCard;
