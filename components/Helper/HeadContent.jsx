import React from "react";
import Head from "next/head";

const HeadContent = (props) => {
  return (
    <Head>
      <title>{`Everything Shivpuri | ${props.title}`}</title>
      <meta name="description" content={props.content} />
    </Head>
  );
};

export default HeadContent;
