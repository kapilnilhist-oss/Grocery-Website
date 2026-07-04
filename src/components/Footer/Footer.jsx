import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-zinc-100 py-20">
      <div className=" flex flex-wrap  gap-y-12 max-w-[1400px] mx-auto px-10 py-10">
        <div className="flex-1 basis-[300px]">
          <a href="" className="text-3xl font-bold">
            Gr<span className="text-orange-500 uppercase">o</span>cify
          </a>
          <p className="text-zinc-600 mt-6 max-w-[350px]">
            Bred for a high content of benefical substances.our product are all
            freash and healthy.
          </p>
        </div>
        <ul className="flex-1">
          <li>
            <h5 className="text-2xl text-zinc-800">Company</h5>
          </li>
          <li className="mt-4">
            <a href="#" className="text-zinc-800 hover:text-orange-500">
              About
            </a>
          </li>
          <li className="mt-4">
            <a href="#" className="text-zinc-800 hover:text-orange-500">
              FAQ'S
            </a>
          </li>
        </ul>

        <ul className="flex-1">
          <li>
            <h5 className="text-2xl text-zinc-800">Suport</h5>
          </li>
          <li className="mt-4">
            <a href="#" className="text-zinc-800 hover:text-orange-500">
              support center
            </a>
          </li>
          <li className="mt-4">
            <a href="#" className="text-zinc-800 hover:text-orange-500">
              Feedback
            </a>
          </li>
          <li className="mt-4">
            <a href="#" className="text-zinc-800 hover:text-orange-500">
              Contact Us
            </a>
          </li>
        </ul>
        <div className="flex-1">
          <h5 className="text-2xl text-zinc-800">Stay connected</h5>
          <p className="mt-6 text-zinc-600">
            Questions and Feedback? <br /> we,d love to here from you
          </p>
          <div className=" bg-white flex mt-6 p-1 rounded-lg">
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="off"
              placeholder="Email addres"
              className="h-[5vh] p-2 m-auto flex-1 focus:outline-none"
            />
            <button className="bg-gradient-to-b from-orange-400 to-orange-500 p-2 rounded-lg text-white text-2xl cursor-pointer">
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
      <p className=" flex justify-center items-center  text-zinc-800 mt-6 ">
        2026 &copy; all right reserved
      </p>
    </footer>
  );
};

export default Footer;
