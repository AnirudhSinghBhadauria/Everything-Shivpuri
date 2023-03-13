import React, { Fragment } from "react";
import classes from "./style/displayServices.module.scss";
import ServicesCard from "../Services/ServicesCard";
import {
  Regular,
  RegularBold,
  RegularMedium,
  RegularSemiBold,
} from "assets/Fonts/fonts";
import IntroSection from "./IntroSection";

const DisplayServices = ({ services }) => {
  const { heading, color, desc, background } = services[0];
  return (
    <Fragment>
      <IntroSection
        heading={heading}
        desc={desc}
        color={color}
        background={background}
      />

      <section className={classes.serviceContainer}>
        {services.map(
          ({ name, img, id, back, curruntPath, phone, location }) => (
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
          )
        )}
      </section>
    </Fragment>
  );
};

export default DisplayServices;
