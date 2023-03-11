import {
  RegularBold,
  RegularMedium,
  RegularSemiBold,
} from "assets/Fonts/fonts";
import React from "react";
import classes from "./style/text.module.scss";
import Thumb from "assets/svg/Thumb";

const BusniessText = () => {
  return (
    <section className={classes.container}>
      <div>
        <Thumb />
        <h1 className={RegularSemiBold.className}>
          Add busniess to Everything Shivpuri
        </h1>
        <p className={RegularMedium.className}>
          Welcome to our <strong> 'Add Business' </strong> section, where
          businesses can create a listing and promote their products and
          services to our audience.
        </p>
        <p className={RegularMedium.className}>
          Our simple and easy-to-use form allows you to provide all the
          necessary information about your business, such as
          <strong> your address, contact information of your offerings.</strong>
        </p>
        <p className={RegularMedium.className}>
          Here are some of the constraints every entry must follow about the
          information to be entered in the following form.
          <strong>
            It may be noted that the information must be according to these
            conditions:
          </strong>
        </p>
      </div>
    </section>
  );
};

export default BusniessText;
