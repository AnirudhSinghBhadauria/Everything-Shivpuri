import { RegularBold, RegularMedium } from "@/assets/Fonts/fonts";
import IceCream from "@/assets/svg/IceCream";
import React from "react";
import ButtonLink from "../Helper/ButtonLink";
import classes from "../Services/style/servicesCard.module.scss";
import Image from "next/image";

const ServicesCard = () => {
  return (
    <div className={classes.card}>
      <section className={classes.imageContainer}>
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/everything-shivpuri-c7a4f.appspot.com/o/services%2FBanks.webp?alt=media&token=0bae678c-e6cf-452d-9373-2f56b5ff50c2"
          fill
          alt="/"
        />
      </section>
      <div>
        <section className={classes.headingContainer}>
          <h2 className={RegularMedium.className}>BANKS</h2>
          <IceCream fill="black" />
        </section>
        <ButtonLink
          href="/"
          label="/"
          className={`${RegularBold.className} ${classes.button}`}
        >
          DETAILS
        </ButtonLink>
        {/* <section>
          <ButtonLink
            href="/"
            label="/"
            className={`${RegularBold.className} ${classes.button}`}
          >
            PHONE
          </ButtonLink>{" "}
          <ButtonLink
            href="/"
            label="/"
            className={`${RegularBold.className} ${classes.button}`}
          >
            LOCATION
          </ButtonLink>
        </section> */}
      </div>
    </div>
  );
};

export default ServicesCard;
