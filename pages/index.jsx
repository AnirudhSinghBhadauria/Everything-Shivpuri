import React, { Fragment } from "react";
import Hero from "../components/HomePage/Hero";
import Content from "../components/HomePage/Content";
import TextContent from "../components/HomePage/TextContent";
import classes from "../styles/homepage.module.scss";
import Community from "components/HomePage/Community";
import HeadContent from "components/Helper/HeadContent";

const HomePage = () => {
  return (
    <div className={classes.wrapper}>
      <HeadContent
        title="Home"
        content="Welcome to Everything Shivpuri - your one-stop destination for all things Shivpuri! Discover the best places to visit, eat, shop, and stay in this beautiful city. Our website features a comprehensive directory of businesses and services that are important for both locals and tourists alike. Whether you're a newcomer or a long-time resident, you'll find everything you need to know about Shivpuri right here. We also promote various businesses and services in the area, and users can even add their own listings to our directory. Explore everything Shivpuri has to offer with us!"
      />

      <Hero />
      <Content />
      <TextContent />
      <Community />
    </div>
  );
};

export default HomePage;
