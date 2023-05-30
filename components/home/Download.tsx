import React from "react";

const Download = () => {
  return (
    <div>
      <div className="flex px-56 bg-gray-100 py-20 gap-x-28 items-center">
        <div className="w-1/2">
          <img src="/img/download.png" alt="photo" />
        </div>
        <div className="w-1/2">
          <h1 className="text-3xl font-semibold">Download the Mediisha app</h1>
          <p className="text-sm mt-[20px]">
            Get in touch with the top-most expert Specialist Doctors for an
            accurate consultation on the Mediisha. Connect with Doctors, that
            will be available 24/7 right for you.
          </p>
          <p className="mt-[50px] text-base font-semibold ">
            Get the link to download the app
          </p>
          <div className="flex gap-x-5 mt-3">
            <img src="/img/google.png" alt="phtot" className="h-10" />
            <img src="/img/apple.png" alt="phtot" className="h-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
