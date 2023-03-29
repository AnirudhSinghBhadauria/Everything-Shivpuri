import React, { Fragment, useContext } from "react";
import classes from "./style/layout.module.scss";
import Footer from "./Footer";
import Header from "./Header";
import Modal from "components/Helper/Modal";
import { appContext } from "store/AppContextProvider";
import Bar from "./Bar";

const Layout = (props) => {
  const { message, sidebar, sidebarHandeler } = useContext(appContext);
  const { value, status } = message;

  const mainClasses = sidebar
    ? `${classes.main} ${classes.blackAndWhite}`
    : `${classes.main}`;

  const sidebarOpener = (action) => {
    action.preventDefault();
    sidebarHandeler(true)
  };

  return (
    <div className={classes.wrapper} onContextMenu={sidebarOpener}>
      <Header />
      <main className={mainClasses}>{props.children}</main>
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
