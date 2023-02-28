import React from "react";
import classes from "./style/header.module.scss";
import { Regular, RegularMedium, RegularSemiBold } from "../../assets/Fonts/fonts";
import ES from "@/assets/svg/ES";
import Mail from "@/assets/svg/Mail";
import Link from "next/link";

const Header = () => {
  return (
    <nav className={classes.navWrapper}>
      <ES className={classes.ES} fill="hsl(66, 100%, 72%)" />

      <section className={RegularMedium.className}>
        <Link href="#">ABOUT</Link>
        <Link href="#">CATEGORY</Link>
        <Link href="#">GENRAL</Link>
        <Link href="#">CONTACT</Link>
      </section>

      <section>
        <Link className={RegularMedium.className} href="#">
          REACH
        </Link>
        <div className={classes.line}></div>
        <Link href="#" className={classes.mailWrapper}>
          <Mail />
        </Link>
      </section>
    </nav>
  );
};

export default Header;
