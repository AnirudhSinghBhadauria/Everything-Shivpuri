import React from "react";
import classes from "./style/displayServices.module.scss";
import ServicesCard from "../Services/ServicesCard";

const DisplayServices = ({ services }) => {
  return (
    <section className={classes.serviceContainer}>
      {services.map(({ name, img, id, back, curruntPath, phone, location }) => (
        <ServicesCard
          key={id}
          name={name}
          src={img}
          id={id}
          back={back}
          href={`/${curruntPath}/${id}`}
          phone={phone}
          location={location}
        />
      ))}
    </section>
  );
};

export default DisplayServices;
