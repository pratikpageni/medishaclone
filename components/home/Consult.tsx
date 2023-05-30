import consultdata from "@/constraints/consult.data";
import React from "react";

const Consult = () => {
  return (
    <div className="">
      <p className="text-[22px] font-semibold ">
        Consult from the Best Doctors
      </p>
      <p className="text-[14px]">
        Get in touch with the experts and specialist Doctors.
      </p>
      <div className="flex mt-14 px-5 justify-between">
        {consultdata.map((data, index) => {
          return (
            <button key={index}>
              <div className="flex justify-center">
                <img src={`img/${data.img}`} alt="" />
              </div>
              <div className="text-center">
                <p className="font-semibold text-[13px] mt-1">{data.title}</p>
                <p className="text-xs font-medium text-blue-900 mt-1">
                  Consult Now
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Consult;
