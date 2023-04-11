import React from "react";
import { getData } from "../../../lib/getData";
import DisplayServices from "../../../components/Services/DisplayServices";
import HeadContent from "components/Helper/HeadContent";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const Service = ({ service }) => {
  const { Data, Error } = service;
  const { query } = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0.5, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0.5, y: 10 }}
    >
      <HeadContent
        title={query.service}
        content={`Know more about ${query.service} services in Shivpuri, There are many ${query.service} places in Shivprui, Explore and Enjoy!`}
      />

      <DisplayServices services={Data.array} />
    </motion.div>
  );
};

export default Service;

export async function getStaticProps(context) {
  const document = context.params.service;
  const collection = context.params.services;

  const serviceData = await getData(collection, document);

  console.log(serviceData);
  return {
    props: { service: serviceData },
  };
}

export async function getStaticPaths() {
  const paths = await getData("service", "service");
  const pathData = paths.Data.array;
  const path = pathData.map((path) => ({ params: path }));

  return {
    paths: path,
    fallback: false,
  };
}
