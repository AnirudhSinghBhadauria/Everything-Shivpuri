import React from "react";
import classes from "./style/footer.module.scss";
import { Array, RegularSemiBold } from "@/assets/Fonts/fonts";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <section>
        <p className={RegularSemiBold.className}>
          There is Something else for you.
        </p>
        <Image
          className={classes.footerImage}
          src="https://firebasestorage.googleapis.com/v0/b/everything-shivpuri-c7a4f.appspot.com/o/Footer.webp?alt=media&token=4dd42e5a-4db9-4d96-8e8d-3894eaaf0ee7"
          fill
        />
      </section>

      <section>
        <div className={`${classes.SecondfooterImageContainer} ${Array.className}`}>
        
        </div>
        <div>
          <div>about us</div>
          <div>contact us</div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
