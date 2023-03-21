import { Regular, RegularMedium } from "./../../assets/Fonts/fonts";
import React, { useContext } from "react";
import ButtonLink from "../Helper/ButtonLink";
import classes from "./style/description.module.scss";
import { appContext } from "store/AppContextProvider";
import { push } from "next/router";
import Cookies from "js-cookie";

const Description = (props) => {
  const { signinWithGoogle, curruntUser } = useContext(appContext);

  const login = async () => {
    await signinWithGoogle();

    if (Cookies.get("isLoggedIn")) {
      push("/AddBusinesses");
    }
  };

  let content =
    curruntUser || props.link ? (
      <ButtonLink
        href={props.path}
        label={props.label}
        className={`${Regular.className} ${classes.titleName}`}
      >
        {props.main}
      </ButtonLink>
    ) : (
      <p
        href={props.path}
        label={props.label}
        onClick={login}
        className={`${Regular.className} ${classes.titleName}`}
      >
        {props.main}
      </p>
    );

  return (
    <section className={classes.descContainer}>
      <div>
        {content}
        <p className={`${RegularMedium.className} ${classes.secondary}`}>
          {props.secondary}
        </p>
      </div>
      <p className={`${classes.desc} ${Regular.className}`}>{props.desc}</p>
    </section>
  );
};

export default Description;
