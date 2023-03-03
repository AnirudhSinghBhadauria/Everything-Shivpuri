import React, { Fragment } from "react";
import classes from "../styles/homepage.module.scss";
import Hero from "@/components/HomePage/Hero";
import Content from "@/components/HomePage/Content";
import Description from "@/components/HomePage/Description";
import TextContent from "@/components/HomePage/TextContent";

const HomePage = () => {
  return (
    <Fragment>
      <Hero />
      <Content />
      <TextContent />
    </Fragment>
  );
};

export default HomePage;
