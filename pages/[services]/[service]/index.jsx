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

export async function getServerSideProps({ params, res }) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=604800, stale-while-revalidate=86400"
  );

  const document = params.service;
  const collection = params.services;

  const serviceData = await getData(collection, document);

  if (!serviceData) {
    return {
      notFound: true,
    };
  }

  return {
    props: { service: serviceData },
  };
}
