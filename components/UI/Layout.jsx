import React, { Fragment, useContext } from "react";
import classes from "./style/layout.module.scss";
import Footer from "./Footer";
import Header from "./Header";
import Modal from "components/Helper/Modal";
import { appContext } from "store/AppContextProvider";
import Bar from "./Bar";

const Layout = (props) => {
  const { message, sidebar } = useContext(appContext);
  const { value, status } = message;

  return (
    <div className={classes.wrapper}>
      <Header />
      <main className={classes.main}>{props.children}</main>
      <Footer />

      {sidebar && (
        <section className={classes.bottomBar}>
          <Bar />
        </section>
      )}

      {value && <Modal message={value} status={status} />}
    </div>
  );
};

export default Layout;
