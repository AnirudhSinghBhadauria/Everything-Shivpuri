import {
  RegularBold,
  RegularMedium,
  RegularSemiBold,
} from "assets/Fonts/fonts";
import React from "react";
import classes from "./style/text.module.scss";
import Image from "next/image";
import { curlyLines } from "assets/Linkage";

const BusniessText = () => {
  return (
    <section className={classes.container}>
      <div>
        <Image src={curlyLines} alt="curlyLines" width="113" height="100" />
        <h1 className={RegularSemiBold.className}>
          <span className={classes.add}>Add businesses</span> to Everything
          Shivpuri
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
          information to be entered in the following form. &nbsp;
          <strong>
            It may be noted that the information must be according to these
            boundries :
          </strong>
        </p>

        <ul className={RegularMedium.className}>
          <li>
            <p>
              Name of the busniess or place must be of&nbsp;
              <strong>atleast 3 characters</strong> and&nbsp;
              <strong>at max 20 characters are allowed.</strong>
            </p>
          </li>
          <li>
            <p>
              Location must be a <strong>link to the location.</strong> Any kind
              of location link will do. However
              <strong> Google Map links are appriciated.</strong>
            </p>
          </li>
          <li>
            <p>
              <strong> Phone Number must be a Indian Phone Number. </strong>It
              should have
              <strong>atleast 10 digits and can have max 15 digits.&nbsp;</strong>
              Number may or may not start with 0.
            </p>
          </li>
          <li>
            <p>
              <strong>Picture must be of exact 384 x 216 pixles</strong> and{" "}
              <strong>its size should be less than 100kb.</strong> &nbsp; Any
              image of dimensions than 384 x 216 is not allowed.
            </p>
          </li>
        </ul>
        <p className={`${RegularMedium.className} ${classes.gradinetSection}`}>
          The purpose of this section is to make it easy for businesses to
          promote themselves on <strong>Everything Shivpuri</strong> and for
          users to find the businesses they need. Fill out the following form
          carefully.
          <strong>
            Share all the required information in correct format and click on
            'Add Business'.
          </strong>
        </p>
      </div>
    </section>
  );
};

export default BusniessText;
