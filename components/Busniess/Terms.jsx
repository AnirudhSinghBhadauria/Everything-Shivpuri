import {
  RegularMedium,
  RegularBold,
  RegularSemiBold,
} from "assets/Fonts/fonts";
import { smily } from "assets/Linkage";
import ButtonLink from "components/Helper/ButtonLink";
import React from "react";
import classes from "./style/terms.module.scss";
import Image from "next/image";

const Terms = () => {
  return (
    <div className={classes.container}>
      <h2 className={RegularBold.className}>
        Terms & <span>Conditions</span>
      </h2>
      <p className={RegularMedium.className}>
        "We take your privacy seriously. Any data collected on our website is
        used solely for the purpose of improving your experience and providing
        you with the best service possible. We do not sell or share your
        information with third parties for any ill content. Your trust is
        important to us, and we are committed to maintaining the highest
        standards of data privacy and security. If you have any questions or
        concerns, please do not hesitate to contact us."
      </p>
      <p className={RegularMedium.className}>
        "Team Everything Shivpuri reserve the right to delete any business
        listing or data submitted to at our discretion. This includes, but is
        not limited to, listings that violate our policies or are deemed
        inappropriate. While we strive to provide a platform that promotes
        business growth and community engagement, we reserve the right to remove
        any content that we believe is not in the best interest of our users. If
        you have any questions or concerns about our policies, please feel free
        to contact us."
      </p>
      <ButtonLink
        href="/Contact"
        name="contact"
        className={`${RegularSemiBold.className} ${classes.contact}`}
      >
        Contact
      </ButtonLink>

      <Image src={smily} alt="smily" width="80" height="80" />
    </div>
  );
};

export default Terms;
