import { RegularMedium } from "../../assets/Fonts/fonts";
import ButtonLink from "components/Helper/ButtonLink";
import { appContext } from "store/AppContextProvider";
import classes from "./style/footer.module.scss";
import React, { useContext, useEffect } from "react";
import Wave from "assets/svg/Wave";
import ES from "assets/svg/ES";
import Link from "next/link";

const Footer = () => {
  const { signOutGoogle, curruntUser, signinWithGoogle } =
    useContext(appContext);

  let content = curruntUser ? (
    <li>
      <Link href="/AddBusinesses" aria-label="add-business">
       business
      </Link>
    </li>
  ) : (
    <li onClick={signinWithGoogle}>Login</li>
  );

  return (
    <footer className={classes.footer}>
      <Wave />
      <section className={classes.container}>
        <div className={classes.topSection}>
          <section>
            <ButtonLink aria='home' href="/" label='home' name="home">
              <ES fill="#d0d0d0" />
            </ButtonLink>
            <p className={RegularMedium.className}>
              Everything Shivpuri serves as a one-stop destination for all
              information related to the town of Shivpuri in Madhya Pradesh,
              India. It features various local businesses, including food shops,
              garment shops, and other services, making it easier for users to
              find what they need.
            </p>
          </section>

          <section>
            <ul className={RegularMedium.className}>
              <li>
                <p>Category</p>
              </li>
              <li>
                <Link href="/Genral" aria-label="Genral">
                  General
                </Link>
              </li>
              <li>
                <Link href="/Tourist" aria-label="Tourist">
                  Tourist?
                </Link>
              </li>
              <li>
                <Link href="/Essentials" aria-label="Essentials">
                  Essentials
                </Link>
              </li>

              {content}
            </ul>
            <ul className={RegularMedium.className}>
              <li>
                <p>Miscellaneous</p>
              </li>
              <li>
                <Link href="/Genral/Emergency" aria-label="Emergency">
                  Emergency
                </Link>
              </li>
              <li>
                <Link href="/Genral/HealthCare" aria-label="Health-Care">
                  Health Care
                </Link>
              </li>
              <li>
                <Link href="/Genral/Education" aria-label="Education">
                  Education
                </Link>
              </li>
              <li>
                <Link href="/Tourist/FoodCafe" aria-label="Food & Cafe">
                  Food & Cafe
                </Link>
              </li>
            </ul>
            <ul className={RegularMedium.className}>
              <li>
                <p>Information</p>
              </li>
              <li>
                <Link href="/About" aria-label="about-us">
                  About
                </Link>
              </li>
              <li>
                <Link href="/Contact" aria-label="contact-us">
                  Contact
                </Link>
              </li>
            </ul>
          </section>
        </div>

        <div className={`${classes.bottomSection} ${RegularMedium.className}`}>
          <Link href="/" aria-label="home">
            <p>everything.shivpuri</p>
          </Link>
          <Link
            href="https://github.com/AnirudhSinghBhadauria"
            aria-label="add-business"
          >
            Developer
          </Link>

          {curruntUser ? (
            <button className={`${classes.logout}`} onClick={signOutGoogle}>
              Logout
            </button>
          ) : (
            ""
          )}
        </div>
      </section>
    </footer>
  );
};

export default Footer;
