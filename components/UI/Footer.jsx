import React from "react";
import Image from "next/image";
import FooterCard from "./FooterCard";
import CardLink from "../Helper/CardLink";
import IceCream from "../../assets/svg/IceCream";
import classes from "./style/footer.module.scss";
import { RegularMedium, RegularSemiBold } from "../../assets/Fonts/fonts";
import { college, footerImageOne, chatri } from "../../assets/Linkage";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <CardLink
        cardStyles={classes.chatriSection}
        href={chatri}
        aria-label="chatri"
      >
        <p className={RegularSemiBold.className}>
          There is Something else for you. <br />
        </p>
        <Image
          alt="Footer Image"
          className={classes.footerImage}
          src={footerImageOne}
          fill
        />
      </CardLink>

      <section>
        <CardLink
          aria-label="UIT RGPV Shivpuri"
          className={classes.secondBigContainer}
          href={college}
          target="_blank"
        >
          <div>
            <p className={RegularSemiBold.className}>UIT RGPV SHIVPURI</p>
            <IceCream fill="black" />
          </div>
          <div>
            <h2 className={RegularMedium.className}>View Our institute</h2>
          </div>
        </CardLink>

        <div>
          <FooterCard
            head="DISCOVER"
            foot="About us"
            color="white"
            path="/About-us"
            back="hsl(262, 97%, 76%)"
            label="about"
          />
          <FooterCard
            head="HAVE SOME QUESTIONS?"
            foot="Contact us"
            color="black"
            path="/Contact-us"
            back="hsl(81, 85%, 60%)"
            label="contact"
          />
        </div>
      </section>
    </footer>
  );
};

export default Footer;
