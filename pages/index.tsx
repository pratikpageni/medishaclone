import Banner from "@/components/home/Banner";
import Consult from "@/components/home/Consult";
import Download from "@/components/home/Download";
import Service from "@/components/home/Service";
import Testomonial from "@/components/home/Testomonial";
import Mainlayout from "@/layouts/Mainlayout";
import React from "react";

const index = () => {
  return (
    <Mainlayout title="Home">
      <Banner />
      <div className="md:px-20 px-10  grid grid-cols-1 gap-y-20">
        <Service />
        <Consult />
        <Testomonial />
      </div>
      <div className="mt-20">
        <Download />
      </div>
    </Mainlayout>
  );
};

export default index;
