import React from "react";
import { getData } from "@/lib/getData";
import DisplayServices from "@/components/Services/DisplayServices";

const Services = (props) => {
  const { services } = props;
  const { Error, Data } = services;

  console.log(Data.array);

  return <DisplayServices />;
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
  console.log(path);

  return {
    paths: path,
    fallback: false,
  };
}
