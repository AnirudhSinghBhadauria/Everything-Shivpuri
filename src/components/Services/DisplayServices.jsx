import React from "react";
import classes from "./style/displayServices.module.scss";
import ServicesCard from '../Services/ServicesCard';

const DisplayServices = () => {
  return (
    <section className={classes.serviceContainer}>
      <ServicesCard />
      <ServicesCard />
      <ServicesCard />
      <ServicesCard />
      <ServicesCard />
    </section>
  );
};

export default DisplayServices;
