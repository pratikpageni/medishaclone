import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#343e93] py-12 px-20 text-white   text-sm">
      <div className="flex justify-between items-center">
        <img src="/img/logo2.png" alt="logo" className="h-12 " />
        <div className="grid grid-cols-1 ">
          <h1 className="font-bold mb-5 ">For Patients</h1>
          <a href="/" className="hover:underline">
            Search for Patients
          </a>
          <a href="/" className="hover:underline">
            Login{" "}
          </a>
          <a href="/" className="hover:underline">
            Register
          </a>
        </div>
        <div className="grid grid-cols-1 ">
          <h1 className="font-bold mb-5 ">Mediisha</h1>
          <a href="/" className="hover:underline">
            About US
          </a>
          <a href="/" className="hover:underline">
            Privacy and Policy
          </a>
          <a href="/" className="hover:underline">
            Terms and conditions
          </a>
        </div>
        <div className="grid grid-cols-1 ">
          <h1 className="font-bold mb-5 ">Contact Us</h1>
          <a href="/" className="hover:underline">
            9863651365
          </a>
          <a href="/" className="hover:underline">
            pagenipratik@gmail.com
          </a>
        </div>
      </div>
      <h1 className="mt-12 text-center text-base">
        Developed by Pratik Pageni
      </h1>
    </div>
  );
};

export default Footer;
