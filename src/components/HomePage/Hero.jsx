import React from "react";
import classes from "./style/hero.module.scss";
import {
  Ambi,
  Regular,
  RegularBold,
  RegularMedium,
  RegularSemiBold,
} from "@/assets/Fonts/fonts";
import IceCream from "@/assets/svg/IceCream";
import ButtonLink from "../Helper/ButtonLink";
import Image from "next/image";
import ES from "@/assets/svg/ES";
import LineCard from "./LineCard";
import {
  avtar1,
  avtar2,
  avtar3,
  homeChatri,
  NOBG,
  weather,
} from "@/assets/Linkage";

const Hero = () => {
  return (
    <section className={classes.wrapper}>
      <section className={classes.topSection}>
        <div>
          <section>
            <h1 className={Ambi.className}>
              EVERYTHING <br /> SHIVPURI
            </h1>
            <p className={RegularMedium.className}>
              Discover Like never before.
            </p>
          </section>

          <section>
            <Image
              className={classes.heroImage}
              src={homeChatri}
              width="384"
              height="264"
              alt="Chatri"
            />
          </section>
        </div>

        <ButtonLink href="/" label="Join" className={classes.joinButton}>
          <IceCream fill="black" />
          <p className={RegularBold.className}>JOIN COMMUNITY</p>
        </ButtonLink>
      </section>

      <section className={classes.bottomSection}>
        <section className={classes.photoSection}>
          <div>
            <Image
              className={classes.NOBG}
              src={NOBG}
              aria-label="chatri-display"
              width="250"
              height="250"
              alt="chatri"
            />
            <h2 className={RegularBold.className}>CULTURAL HERITAGE</h2>
          </div>

          <div>
            <section>
              <span>
                <ES fill="black" />
                <p className={RegularSemiBold.className}>EXPLORE</p>
              </span>
              <h2 className={RegularSemiBold.className}>Empowering</h2>
            </section>
            <p className={RegularMedium.className}>
              Your One-Stop <br /> Destination for Local Information and
              Community Wellness & Growth.
            </p>
          </div>
        </section>

        <section className={classes.lineSection}>
          <div className={classes.upperSection}>
            <section>
              <ButtonLink
                className={`${RegularSemiBold.className} ${classes.climate}`}
                href={weather}
                label="weather"
                target="_blank"
              >
                Weather Forecast
              </ButtonLink>
                <h1 className={Regular.className}>{`${"30"}`}<sup>.</sup></h1>
            </section>

            <section>
              <p className={RegularMedium.className}>
                Everything Shivpuri. <br />
                <strong>
                  Comprehensive Guide to Local Opportunities and Resources.
                </strong>
              </p>

              <div>
                <section>
                  <Image src={avtar1} alt="avtar-2" width="50" height="50" />
                  <Image src={avtar2} alt="avtar-1" width="50" height="50" />
                  <Image src={avtar3} alt="avtar-3" width="50" height="50" />
                </section>
                <ButtonLink
                  href=""
                  label="Join Community"
                  className={`${RegularSemiBold.className} ${classes.community}`}
                >
                  JOIN COMMUNITY
                </ButtonLink>
              </div>
            </section>
          </div>

          <div className={classes.lowerSection}>
            <LineCard
              href="/Tourist"
              label="Tourists"
              title="Tourist"
              message="Everything a Tourist needs to know"
            />
            <LineCard
              href="/Good-To-Know"
              label="Good to know"
              title="Genral"
              message="Genral, Good To Know Resources"
            />
          </div>
        </section>
      </section>
    </section>
  );
};

export default Hero;
