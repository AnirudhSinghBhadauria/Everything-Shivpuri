import React, { Fragment } from "react";
import classes from "./style/layout.module.scss";
import Footer from "./Footer";
import Header from "./Header";

const Layout = (props) => {
  return (
    <Fragment>
      {/* <Header /> */}
      {/* <main>{props.children}</main> */}
      <Footer />
    </Fragment>
  );
};

export default Layout;
