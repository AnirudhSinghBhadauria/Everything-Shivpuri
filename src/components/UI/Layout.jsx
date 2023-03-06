import React, { Fragment, useContext } from "react";
import classes from "./style/layout.module.scss";
import Footer from "./Footer";
import Header from "./Header";

const Layout = (props) => {
  return (
    <div className={classes.wrapper}>
      <Header />
      <main className={classes.main}>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
