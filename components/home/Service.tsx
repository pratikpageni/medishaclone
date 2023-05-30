import React from "react";

const Service = () => {
  return (
    <div>
      <h1 className="text-[22px] font-semibold mt-16 ">
        Medical Services Offered At Home
      </h1>
      <div>
        <div className="flex justify-between w-full">
          <a href="">
            <img src="img/eldercare.png" alt="eldercare" className="h-52" />
          </a>
          <a href="">
            <img src="img/trained.png" alt="trained" className="h-52" />
          </a>
          <a href="">
            <img src="img/nursing.png" alt="nursing care" className="h-52" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Service;
