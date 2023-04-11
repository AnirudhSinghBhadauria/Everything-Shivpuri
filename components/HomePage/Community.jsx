import { RegularMedium, RegularSemiBold } from "assets/Fonts/fonts";
import { social } from "assets/Linkage";
import Instagram from "assets/svg/Instagram";
import Twitter from "assets/svg/Twitter";
import Facebook from "assets/svg/Facebook";
import ButtonLink from "components/Helper/ButtonLink";
import Image from "next/image";
import React from "react";
import classes from "./style/community.module.scss";
import { motion } from "framer-motion";

const Community = () => {
  const facebook = "https://www.facebook.com/dmshivpuri/";
  const twitter = "https://twitter.com/collectorshivp1";
  const instagram = "https://www.instagram.com/shivpurimpindia/?hl=en";

  return (
    <motion.div
      initial={{ y: 50 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.25, type: "spring", stiffness: 120 }}
      id="community"
      className={classes.container}
    >
      <section>
        <h2 className={RegularSemiBold.className}>Join Your Community.</h2>
        <p className={RegularMedium.className}>
          Social media is a great way to connect with people and stay up to date
          with the latest news and events.
        </p>
        <div className={classes.socialMedia}>
          <ButtonLink
            aria="twitter"
            label="twitter"
            href={twitter}
            name="Twitter"
          >
            <Twitter />
          </ButtonLink>
          <ButtonLink
            aria="Instagram"
            label="Instagram"
            href={instagram}
            name="Instagram"
          >
            <Instagram />
          </ButtonLink>
          <ButtonLink
            aria="Facebook"
            label="Facebook"
            href={facebook}
            name="Facebook"
          >
            <Facebook />
          </ButtonLink>
        </div>
      </section>
      <Image src={social} alt="social-media" width="300" height="300" />
    </motion.div>
  );
};

export default Community;
