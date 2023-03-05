import { RegularBold, RegularMedium } from "@/assets/Fonts/fonts";
import IceCream from "@/assets/svg/IceCream";
import React from "react";
import ButtonLink from "../Helper/ButtonLink";
import classes from "../Services/style/servicesCard.module.scss";
import Image from "next/image";
import CopyButton from "../Helper/CopyButton";

const ServicesCard = (props) => {
  let buttons;

  if (props.phone || props.location) {
    if (props.phone && props.location) {
      buttons = (
        <section>
          <ButtonLink
            href={props.location}
            label="location"
            target="_blank"
            className={`${RegularBold.className} ${classes.button}`}
          >
            LOCATION
          </ButtonLink>
          <ButtonLink
            href={`tel: ${props.phone}`}
            label="phoneNumber"
            className={`${RegularBold.className} ${classes.button}`}
          >
            PHONE
          </ButtonLink>
          <CopyButton className={classes.button} phone={props.phone} />
        </section>
      );
    } else if (!props.phone) {
      buttons = (
        <ButtonLink
          href={props.location}
          label="location"
          target="_blank"
          className={`${RegularBold.className} ${classes.button}`}
        >
          LOCATION
        </ButtonLink>
      );
    } else {
      buttons = (
        <section>
          <ButtonLink
            href={props.phone}
            label="phoneNumber"
            className={`${RegularBold.className} ${classes.button}`}
          >
            PHONE
          </ButtonLink>
          <CopyButton className={classes.button} phone={props.phone} />
        </section>
      );
    }
  } else {
    buttons = (
      <ButtonLink
        href={props.href}
        label={props.id}
        className={`${RegularBold.className} ${classes.button}`}
      >
        DETAILS
      </ButtonLink>
    );
  }

  return (
    <div style={{ backgroundColor: props.back }} className={classes.card}>
      <section className={classes.imageContainer}>
        <Image src={props.src} fill alt={props.id} />
      </section>
      <div>
        <section className={classes.headingContainer}>
          <h2 className={RegularMedium.className}>{props.name}</h2>
          <IceCream fill="black" />
        </section>
        {buttons}
      </div>
    </div>
  );
};

export default ServicesCard;
