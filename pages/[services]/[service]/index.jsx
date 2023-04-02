import React, { Fragment } from "react";
import { getData } from "../../../lib/getData";
import DisplayServices from "../../../components/Services/DisplayServices";
import HeadContent from "components/Helper/HeadContent";
import { useRouter } from "next/router";

const Service = ({ service }) => {
  const { Data, Error } = service;
  const { query } = useRouter();

  return (
    <Fragment>
      <HeadContent
        title={query.service}
        content={`Know more about ${query.service} services in Shivpuri, There are many ${query.service} places in Shivprui, Explore and Enjoy!`}
      />

      <DisplayServices services={Data.array} />
    </Fragment>
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
