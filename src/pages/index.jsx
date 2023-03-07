import React, { Fragment } from "react";
import Hero from "@/components/HomePage/Hero";
import Content from "@/components/HomePage/Content";
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
