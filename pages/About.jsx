import {
  RegularBold,
  RegularMedium,
  RegularSemiBold,
} from "assets/Fonts/fonts";
import ButtonLink from "components/Helper/ButtonLink";
import React from "react";
import classes from "../styles/about.module.scss";

const About = () => {
  return (
    <section className={classes.about}>
      <h1 className={`${RegularMedium.className} ${classes.more}`}>
        LEARN MORE <br /> <span>ABOUT</span> US
      </h1>

      <div>
        <p className={`${RegularSemiBold.className} ${classes.content}`}>
          Welcome to Everything Shivpuri, created by a team of talented students
          from UIT RGPV Shivpuri as a minor project. Our team includes Anirudh
          Singh Bhadauria (Developer - UI/UX), Abhyuday Sharma (Graphics),
          Aditya Tripathi (Graphics), and Ishank Rajiv Pathak (Documentation).{" "}
          <br />
          <br /> Everything Shivpuri is dedicated to promoting the different
          businesses, shops, and places in Shivpuri by featuring them on our
          platform. We believe that these establishments deserve recognition and
          support, and we aim to help them gain more customers and increase
          their revenue.
          <br />
          <br /> On Everything Shivpuri, users can browse through a wide range
          of establishments including food cafes, restaurants, garment shops,
          and more. They can view basic details such as phone numbers and
          locations to help them plan their visits. Additionally, we have an
          "Add Businesses" section that allows users to suggest new businesses
          to be featured on our platform. However, users must log in first to
          make any submissions.
          <br />
          <br /> We are committed to providing a user-friendly experience and
          constantly strive to improve our platform. Thank you for visiting
          Everything Shivpuri, and we hope you enjoy browsing through our
          featured establishments.
          <br />
          <br />
          We would love to hear from you! If you have any questions, comments,
          or feedback about Everything Shivpuri or featured businesses, please
          feel free to contact our team. We are dedicated to providing the best
          user experience possible, and your input helps us to achieve that
          goal. We value your opinions and strive to respond to all inquiries as
          soon as possible. Thank you for your interest in Everything Shivpuri!
        </p>

        <ButtonLink
          href="/Contact"
          className={`${RegularSemiBold.className} ${classes.Contact}`}
          label="Contact"
        >
          Contact
        </ButtonLink>
      </div>
    </section>
  );
};

export default About;
