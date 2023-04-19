import {
  RegularBold,
  RegularMedium,
  RegularSemiBold,
} from "assets/Fonts/fonts";
import ButtonLink from "components/Helper/ButtonLink";
import React from "react";
import classes from "../styles/about.module.scss";
import HeadContent from "components/Helper/HeadContent";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0.5, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0.5, y: 10 }}
      className={classes.about}
    >
      <HeadContent
        title="About"
        content="Welcome to the About Us page for Everything Shivpuri! Here, you can learn more about our team and our mission to provide you with the best information and resources about Shivpuri. Our dedicated team of writers and researchers are passionate about sharing the rich history, culture, and natural beauty of this amazing city with our readers. Discover the story behind our Everything Shivpuri and the people who make it all happen."
      />

      <h1 className={`${RegularMedium.className} ${classes.more}`}>
        LEARN MORE <br /> <span>ABOUT</span> US
      </h1>

      <div>
        <p className={`${RegularSemiBold.className} ${classes.content}`}>
          Everything Shivpuri is dedicated to promoting the different
          businesses, shops, and places in Shivpuri by featuring them on our
          platform. I believe that these establishments deserve recognition and
          support, and I aim to help them gain more customers and increase
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
          <br /> I am committed to providing a user-friendly experience and
          constantly strive to improve our platform. Thank you for visiting
          Everything Shivpuri, and I hope you enjoy browsing through our
          featured establishments.
          <br />
          <br />
          I would love to hear from you! If you have any questions, comments, or
          feedback about Everything Shivpuri or featured businesses, please feel
          free to contact our team. I am dedicated to providing the best user
          experience possible, and your input helps us to achieve that goal.
          <br />
          <br />
          Everything Shiivpuri is a minor project that has been developed,
          UI/UX, documentation all have been done by me. I value your opinions
          and strive to respond to all inquiries as soon as possible. Thank you
          for your interest in Everything Shivpuri!
        </p>

        <ButtonLink
          href="/Contact"
          className={`${RegularSemiBold.className} ${classes.Contact}`}
          label="Contact"
        >
          Contact
        </ButtonLink>
      </div>
    </motion.section>
  );
};

export default About;
