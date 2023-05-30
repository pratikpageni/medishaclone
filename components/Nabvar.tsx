import navbardata from "@/constraints/navbar.data";
import Link from "next/link";
import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdShoppingCart } from "react-icons/md";
import { BsList } from "react-icons/bs";
import { RxCrossCircled } from "react-icons/rx";

const Nabvar = () => {
  const [show, setshow] = useState(false);

  return (
    <>
      <div className="flex bg-white md:px-20 px-5 py-5 items-center justify-between md:justify-start sticky top-0 z-[999999]  shadow-md">
        <button className="md:hidden" onClick={() => setshow(!show)}>
          {show ? <RxCrossCircled size={30} /> : <BsList size={30} />}
        </button>
        <div className="md:w-[10%] -ml-40 md:ml-0">
          <a href="">
            <img src="/img/logo.png" alt="logo" className="h-5 md:h-full" />
          </a>
        </div>
        <div className="md:w-[85%] ml-5 md:flex gap-x-4 hidden  ">
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
        <div className="md:w-[5%] gap-x-2 flex">
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
      <div
        className={`w-[60%] ${
          show ? "block" : "hidden"
        } fixed h-full bg-white z-[999999]  md:hidden  py-2`}
      >
        <div className="grid grid-cols-1 ">
          {navbardata.map((data, index) => {
            return (
              <Link href={"/"} key={index} className=" border-t py-2 pl-4">
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
      </div>
    </>
  );
};

export default Nabvar;
