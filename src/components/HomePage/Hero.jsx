import React from "react";
import classes from "./style/hero.module.scss";
import { RegularBold, Ambi, RegularMedium } from "@/assets/Fonts/fonts";
import IceCream from "@/assets/svg/IceCream";
import ButtonLink from "../Helper/ButtonLink";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={classes.wrapper}>
      <section className={classes.topSection}>
        <div>
          <section>
            <h1 className={Ambi.className}>
              EVERYTHING <br /> SHIVPURI
            </h1>
            <p className={RegularMedium.className}>
              Discover Like never before.
            </p>
          </section>

          <section>
            <Image
              className={classes.heroImage}
              src="https://firebasestorage.googleapis.com/v0/b/everything-shivpuri-c7a4f.appspot.com/o/heroChatri.webp?alt=media&token=7e2663e6-0ffd-44b8-82b8-5ba8a5591c1d"
              width="384"
              height="264"
              alt="Chatri"
            />
          </section>
        </div>

        <ButtonLink href="/" label="Join" className={classes.joinButton}>
          <IceCream fill="black" />
          <p className={RegularBold.className}>JOIN COMMUNITY</p>
        </ButtonLink>
      </section>

      <section className={classes.bottomSection}></section>
    </section>
  );
};

export default Hero;
