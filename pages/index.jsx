import React, { Fragment } from "react";
import Hero from "../components/HomePage/Hero";
import Content from "../components/HomePage/Content";
import TextContent from "../components/HomePage/TextContent";
import classes from '../styles/homepage.module.scss'
import Community from "components/HomePage/Community";

const HomePage = () => {
  return (
    <div className={classes.wrapper}>
      <Hero />
      <Content />
      <TextContent />
      <Community />
    </div>
  );
};

export default HomePage;
