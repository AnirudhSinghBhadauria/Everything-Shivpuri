import {
  RegularBold,
  RegularMedium,
  RegularSemiBold,
} from "assets/Fonts/fonts";
import { didnt } from "assets/Linkage";
import ButtonLink from "components/Helper/ButtonLink";
import Image from "next/image";
import React from "react";
import classes from "./style/didnt.module.scss";

const Didnt = () => {
  return (
    <div className={classes.container}>
      <section>
        <h2 className={RegularSemiBold.className}>
          Didn't got what you <br /> were looking for ?
        </h2>
        <ButtonLink
          href="/AddBusinesses"
          name="add-busniess"
          className={`${RegularSemiBold.className} ${classes.button}`}
        >
          Add business
        </ButtonLink>
      </section>
      <Image src={didnt} width="438" height="275" alt="didnt" />
    </div>
  );
};

export default Didnt;
