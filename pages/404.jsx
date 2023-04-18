import { RegularSemiBold, RegularMedium } from "assets/Fonts/fonts";
import React, { Fragment } from "react";
import classes from "../styles/error.module.scss";
import { RegularBold } from "assets/Fonts/fonts";
import ButtonLink from "components/Helper/ButtonLink";
import HeadContent from "components/Helper/HeadContent";

const ErrorPages = () => {
  return (
    <Fragment>
      <HeadContent
        title="Page Not Found"
        content="Page Not Found. The page you were looking for may have been moved, deleted or never
          existed. We suggest you back to home."
      />
      <div className={classes.container}>
        <h1 className={RegularBold.className}>404.</h1>
        <p className={RegularMedium.className}>
          The page you were looking for may have been moved, deleted or never
          existed. <br /> We suggest you back to home.
        </p>

        <ButtonLink
          className={`${RegularSemiBold.className} ${classes.home}`}
          href="/"
          aria-label="homepage"
        >
          Back to Home
        </ButtonLink>
      </div>
    </Fragment>
  );
};

export default ErrorPages;
