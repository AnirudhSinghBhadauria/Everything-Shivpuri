import React from "react";
import Link from "next/Link";
import Image from "next/image";
import FooterCard from "./FooterCard";
import IceCream from "@/assets/svg/IceCream";
import classes from "./style/footer.module.scss";
import {
  college,
  footerImageOne,
  collegeLogo,
  chatri,
} from "../../assets/Links";
import { RegularMedium, RegularSemiBold } from "@/assets/Fonts/fonts";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <section>
        <Link href={chatri}>
          <p className={RegularSemiBold.className}>
            There is Something else for you. <br />
          </p>

          <Image
            alt="Footer Image"
            className={classes.footerImage}
            src={footerImageOne}
            fill
          />
        </Link>
      </section>

      <section>
        <div>
          <Link
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
          </Link>
        </div>

        <div>
          <FooterCard
            head="DISCOVER"
            foot="About us"
            color="white"
            path="/About-us"
            back="hsl(262, 97%, 76%)"
          />
          <FooterCard
            head="HAVE SOME QUESTIONS?"
            foot="Contact us"
            color="black"
            path="/Contact-us"
            back="hsl(81, 85%, 60%)"
          />
        </div>
      </section>
    </footer>
  );
};

export default Footer;
