import React from "react";
import CustomCarusel from "../CustomCarousel";
import testomonial from "@/constraints/testomonial.data";

const Testomonial = () => {
  return (
    <div className="">
      <h1 className="text-center font-semibold text-[20px]">
        Our Happy Customer
      </h1>
      <div className="mt-16">
        <CustomCarusel>
          {testomonial.map((data, index) => {
            return (
              <div className="border rounded-md p-3 h-48 shadow-md">
                <div className="flex gap-x-2 items-center">
                  <img
                    src="/img/banner.png"
                    alt="photo"
                    className="w-9 h-9 rounded-full"
                  />
                  <p className="font-bold text-sm">{data.name}</p>
                </div>
                <p className="text-sm mt-5">{data.message}</p>
              </div>
            );
          })}
        </CustomCarusel>
      </div>
    </div>
  );
};

export default Testomonial;
