import { Fragment } from "react";
import Head from "next/head";
import Layout from "../components/UI/Layout";
import "../styles/globals.css";
import AppContextProvider from "../store/AppContextProvider";

export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>Everything Shivpuri</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <AppContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppContextProvider>
      
    </Fragment>
  );
}
