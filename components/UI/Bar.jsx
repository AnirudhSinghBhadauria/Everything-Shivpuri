import { RegularBold } from "assets/Fonts/fonts";
import ES from "assets/svg/ES";
import LineCard from "components/HomePage/LineCard";
import Image from "next/image";
import React, { useContext } from "react";
import { appContext } from "store/AppContextProvider";
import classes from "../UI/style/bar.module.scss";

const Bar = () => {
  const {
    sidebarHandeler,
    barClasses,
    barClassesHandeler,
    curruntUser,
    signinWithGoogle,
    signOutGoogle,
  } = useContext(appContext);

  const profilePicture = curruntUser && (
    <Image
      src={curruntUser.photoURL}
      width="30"
      height="30"
      alt="displayName"
    />
  );

  const sidebarCloseHandeler = () => {
    barClassesHandeler(classes.closeSidebar);

    setTimeout(() => {
      sidebarHandeler(false);
      barClassesHandeler();
    }, 340);
  };

  return (
    <section className={`${classes.bar} ${barClasses}`}>
      {/* <ES fill="white" /> */}
      <LineCard
        title="About"
        message="Know more about us."
        href="/About"
        label="about-us"
      />
      <LineCard
        title="General"
        message="Good to Know things."
        href="/Genral"
        label="General"
      />
      <LineCard
        title="Essentials"
        message="Daily Commodities."
        href="/Essentials"
        label="Essentials"
      />
      <LineCard
        title="Contact"
        message="Get in Touch with us."
        href="/Contact"
        label="contact-us"
      />

      <div className={classes.bottomContainer}>
        {profilePicture}

        <button
          onClick={!curruntUser ? signinWithGoogle : signOutGoogle}
          className={`${RegularBold.className} ${classes.login}`}
        >
          {curruntUser ? "LOGOUT" : "LOGIN"}
        </button>
        <button
          onClick={sidebarCloseHandeler}
          className={`${RegularBold.className} ${classes.close}`}
        >
          CLOSE
        </button>
      </div>
    </section>
  );
};

export default Bar;
