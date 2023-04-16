import { Fragment } from "react";
import Head from "next/head";
import Layout from "../components/UI/Layout";
import "../styles/globals.css";
import AppContextProvider from "../store/AppContextProvider";

export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <AppContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppContextProvider>
    </Fragment>
  );
}
