import React from "react";
import { getData } from "../../lib/getData";
import DisplayServices from "../../components/Services/DisplayServices";
import { useRouter } from "next/router";
import HeadContent from "components/Helper/HeadContent";
import { motion } from "framer-motion";

const Services = ({ services }) => {
  const { Error, Data } = services;
  const { query } = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0.5, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0.5, y: 10 }}
    >
      <HeadContent
        title={query.services}
        content={`${query.services} things in Shivpuri that every new tourist or Localite needs to know. Explore ${query.services} places and learn more about prestigious city of Shivpuri`}
      />

      <DisplayServices services={Data.array} />
    </motion.div>
  );
};

export default Services;

export async function getServerSideProps({ res, params }) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=604800, stale-while-revalidate=86400"
  );

  const services = params.services;

  const serviceData = await getData(services, services);

  if (!serviceData) {
    return {
      notFound: true,
    };
  }

  return {
    props: { services: serviceData },
  };
}

// export async function getStaticPaths() {
//   const paths = await getData("services", "services");

//   const pathsData = paths.Data.array;

//   const path = pathsData.map((path) => ({ params: { services: path } }));

//   return {
//     paths: path,
//     fallback: false,
//   };
// }
