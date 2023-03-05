import React, { Fragment, useContext } from "react";
import classes from "./style/layout.module.scss";
import Footer from "./Footer";
import Header from "./Header";
import CopyModal from "../Helper/CopyModal";
import { appContext } from "@/store/AppContextProvider";

const Layout = (props) => {
  const { copied } = useContext(appContext);

  return (
    <Fragment>
      <Header />
      <main className={classes.main}>{props.children}</main>
      <Footer />
      {copied && <CopyModal />}
    </Fragment>
  );
};

export default Layout;
