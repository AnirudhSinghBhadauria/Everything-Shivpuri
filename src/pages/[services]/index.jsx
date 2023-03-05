import React from "react";
import { getData } from "@/lib/getData";
import DisplayServices from "@/components/Services/DisplayServices";

const Services = ({ services }) => {
  const { Error, Data } = services;

  return <DisplayServices services={Data.array}/>;
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
