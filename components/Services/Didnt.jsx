import {
  RegularBold,
  RegularMedium,
  RegularSemiBold,
} from "assets/Fonts/fonts";
import { didnt } from "assets/Linkage";
import ButtonLink from "components/Helper/ButtonLink";
import Image from "next/image";
import React, { useContext } from "react";
import { appContext } from "store/AppContextProvider";
import classes from "./style/didnt.module.scss";
import { push } from "next/router";
import Cookies from "js-cookie";

const Didnt = () => {
  const { curruntUser, signinWithGoogle } = useContext(appContext);

  const login = async () => {
    await signinWithGoogle();

    if (Cookies.get("isLoggedIn")) {
      push("/AddBusinesses");
    }
  };

  const content = curruntUser ? (
    <ButtonLink
      href="/AddBusinesses"
      name="add-busniess"
      className={`${RegularSemiBold.className} ${classes.button}`}
    >
      Add business
    </ButtonLink>
  ) : (
    <button
      className={`${RegularSemiBold.className} ${classes.button}`}
      onClick={login}
    >
      Add business
    </button>
  );

  return (
    <div className={classes.container}>
      <section>
        <h2 className={RegularSemiBold.className}>
          Didn't got what you <br /> were looking for ?
        </h2>
        {content}
      </section>
      <Image src={didnt} width="438" height="275" alt="didnt" />
    </div>
  );
};

export default Didnt;
