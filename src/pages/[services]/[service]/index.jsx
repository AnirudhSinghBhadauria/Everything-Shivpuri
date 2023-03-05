import { getData } from "@/lib/getData";
import React from "react";
import DisplayServices from "@/components/Services/DisplayServices";

const Service = ({ service }) => {
  const {Data, Error} = service;

  return <DisplayServices services={Data.array}/>;
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
