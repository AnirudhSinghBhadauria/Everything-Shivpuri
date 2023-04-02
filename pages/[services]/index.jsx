import React, { Fragment } from "react";
import { getData } from "../../lib/getData";
import DisplayServices from "../../components/Services/DisplayServices";
import { useRouter } from "next/router";
import HeadContent from "components/Helper/HeadContent";

const Services = ({ services }) => {
  const { Error, Data } = services;
  const { query } = useRouter();

  return (
    <Fragment>
      <HeadContent
        title={query.services}
        content={`${query.services} things in Shivpuri that every new tourist or Localite needs to know. Explore ${query.services} places and learn more about prestigious city of Shivpuri`}
      />

      <DisplayServices services={Data.array} />
    </Fragment>
  );
};

export default Services;

export async function getStaticProps(context) {
  const services = context.params.services;

  const serviceData = await getData(services, services);

  return {
    props: { services: serviceData },
  };
}

export async function getStaticPaths() {
  const paths = await getData("services", "services");

  const pathsData = paths.Data.array;

  const path = pathsData.map((path) => ({ params: { services: path } }));

  return {
    paths: path,
    fallback: false,
  };
}
