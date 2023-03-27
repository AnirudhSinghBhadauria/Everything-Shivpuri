import React, { useContext } from "react";
import classes from "./style/header.module.scss";
import { RegularMedium } from "../../assets/Fonts/fonts";
import ES from "../../assets/svg/ES";
import Mail from "../../assets/svg/Mail";
import Link from "next/link";
import Image from "next/image";
import { appContext } from "store/AppContextProvider";
import Opener from "../../assets/svg/Opener";

const Header = () => {
  const { signinWithGoogle, curruntUser, sidebarHandeler } =
    useContext(appContext);

  const photoURL = curruntUser && curruntUser.photoURL;

  const sidebarOpenerHandeler = () => sidebarHandeler(true);

  return (
    <nav className={classes.navWrapper}>
      <Link className={classes.ESContainer} href="/">
        <ES className={classes.ES} fill="white" />
      </Link>

      <section className={`${RegularMedium.className} ${classes.middleHeader}`}>
        <Link href="/About" aria-label="ABOUT">
          ABOUT
        </Link>
        <Link href="/Essentials" aria-label="Essentials">
          ESSENTIALS
        </Link>
        <Link href="/Genral" aria-label="GENERAL">
          GENERAL
        </Link>
        <Link href="/Contact" aria-label="CONTACT">
          CONTACT
        </Link>
      </section>

      <section className={classes.rightHeader}>
        {!curruntUser ? (
          <Link
            className={RegularMedium.className}
            href="#"
            onClick={signinWithGoogle}
          >
            LOGIN
          </Link>
        ) : (
          <div className={classes.displayPicture}>
            <Image
              src={photoURL}
              width="32"
              height="32"
              alt="display-picture"
            />
          </div>
        )}

        <div className={classes.line}></div>
        <Link href="/Contact" className={classes.mailWrapper}>
          <Mail />
        </Link>

        <section className={classes.smallScreeen}>
          <div className={classes.line}></div>
          <Opener
            fill="hsl(66, 100%, 72%)"
            className={classes.opener}
            onClick={sidebarOpenerHandeler}
          />
        </section>
      </section>
    </nav>
  );
};

export default Header;
