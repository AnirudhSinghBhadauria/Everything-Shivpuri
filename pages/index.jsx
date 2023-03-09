import React, { Fragment } from "react";
import Hero from "../components/HomePage/Hero";
import Content from "../components/HomePage/Content";
import TextContent from "../components/HomePage/TextContent";
import classes from '../styles/homepage.module.scss'

const HomePage = () => {
  return (
    <div className={classes.wrapper}>
      <Hero />
      <Content />
      <TextContent />
    </div>
  );
};

export default HomePage;
