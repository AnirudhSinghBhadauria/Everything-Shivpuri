import React, { useContext } from "react";
import {
  RegularBold,
  RegularMedium,
  RegularSemiBold,
} from "../../assets/Fonts/fonts";
import classes from "./style/cards.module.scss";
import IceCream from "../../assets/svg/IceCream";
import ButtonLink from "../Helper/ButtonLink";
import { appContext } from "store/AppContextProvider";
import Cookies from "js-cookie";
import { push } from "next/router";

const Cards = (props) => {
  const { signinWithGoogle } = useContext(appContext);

  const login = async () => {
    await signinWithGoogle();

    if (Cookies.get("isLoggedIn")) {
      push("/AddBusinesses");
    }
  };

  const content =
    props.ifLogged === true ? (
      <ButtonLink
        className={`${RegularBold.className} ${classes.button}`}
        buttonStyle={classes.buttons}
        href={props.href}
        label={props.label}
      >
        DETAILS
      </ButtonLink>
    ) : (
      <button
        className={`${RegularBold.className} ${classes.button}`}
        label={props.label}
        onClick={login}
      >
        LOGIN
      </button>
    );

  return (
    <section style={props.style} className={classes.card}>
      <div>
        <h1 className={RegularMedium.className}>{props.title}</h1>
        <IceCream className={classes.arrow} fill="black" />
      </div>

      {content}
    </section>
  );
};

export default Cards;
