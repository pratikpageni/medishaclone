import React from "react";

const Banner = () => {
  return (
    <div>
      <img
        src="/img/banner.png"
        alt="banner"
        className="h-52 object-cover md:h-full"
      />
      <div className="flex justify-center mt-[-3.4rem] mr-[6.32rem]">
        <button className="bg-blue-500 text-white p-2 px-7 text-sm rounded-md hover:bg-blue-600 hidden md:flex">
          Consult Now
        </button>
      </div>
    </div>
  );
};

export default Banner;
