import React, { Fragment, useContext } from "react";
import classes from "./style/layout.module.scss";
import Footer from "./Footer";
import Header from "./Header";
import Modal from "components/Helper/Modal";
import { appContext } from "store/AppContextProvider";

const Layout = (props) => {
  const { message } = useContext(appContext);
  const { value, status } = message;

  return (
    <div className={classes.wrapper}>
      <Header />
      <main className={classes.main}>{props.children}</main>
      <Footer />
      {value && <Modal message={value} status={status} />}
    </div>
  );
};

export default Layout;
