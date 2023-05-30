import navbardata from "@/constraints/navbar.data";
import Link from "next/link";
import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdShoppingCart } from "react-icons/md";

const Nabvar = () => {
  return (
    <>
      <div className="flex bg-white px-20 py-5 items-center justify-start sticky top-0 z-[999999]  shadow-md">
        <div className="w-[10%]">
          <img src="/img/logo.png" alt="logo" />
        </div>
        <div className="w-[85%] ml-5 flex gap-x-4 ">
          {navbardata.map((data, index) => {
            return (
              <Link href={"/"} key={index}>
                <p className="font-semibold text-[15px] font-Poppins -mb-2">
                  {data.title}
                </p>
                <small className=" text-gray-500  text-xs">
                  {data.subheading}
                </small>
              </Link>
            );
          })}
        </div>
        <div className="w-[5%] gap-x-2 flex">
          <div className="flex items-center">
            <p className="text-[13px]">Login</p>
            <IoMdArrowDropdown />
          </div>
          <button className="text-2xl flex">
            <MdShoppingCart />

            <p className="bg-blue-800 -ml-3 -mt-1 rounded-full text-[12px] w-4 h-4 flex text-center justify-center items-center text-white">
              0
            </p>
          </button>
        </div>
      </div>
    </>
  );
};

export default Nabvar;
