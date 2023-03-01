import React, { Fragment } from "react";
import classes from "../styles/homepage.module.scss";
import Hero from "@/components/HomePage/Hero";
import SlantingCards from "@/components/HomePage/SlantingCards";

const HomePage = () => {
  return (
    <Fragment>
      <Hero />
      {/* <SlantingCards /> */}
    </Fragment>
  );
};

export default HomePage;
