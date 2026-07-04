import React from "react";
import Heading from "../Heading/Heading";
import { FaHeart, FaShieldAlt } from "react-icons/fa";
import { FaLeaf, FaSeedling } from "react-icons/fa6";
import Grocery from "../../assets/grocery.webp";

const Values = () => {
  const leftVlaue = value.slice(0, 2).map((item) => {
    return (
      <div
        key={item.id}
        className=" md:flex-row-reverse flex items-center gap-5"
      >
        <div>
          <span className="flex justify-center items-center text-3xl text-white bg-gradient-to-b from-orange-400 to orange-500 w-15 h-15 rounded-full">
            {item.icon}
          </span>
        </div>
        <div className=" md:text-right">
          <h3 className="text-zinc-800 text-3xl font-bold">{item.tittle}</h3>
          <p className="text-zinc-600 mt-2">{item.pera}</p>
        </div>
      </div>
    );
  });

  const rightVlaue = value.slice(2).map((item) => {
    return (
      <div key={item.id} className="flex items-center gap-5">
        <div>
          <span className="flex justify-center items-center text-3xl text-white bg-gradient-to-b from-orange-400 to orange-500 w-15 h-15 rounded-full">
            {item.icon}
          </span>
        </div>
        <div>
          <h3 className="text-zinc-800 text-3xl font-bold">{item.tittle}</h3>
          <p className="text-zinc-600 mt-2">{item.pera}</p>
        </div>
      </div>
    );
  });

  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10 py-20">
        <Heading highlight="our" heading="value" />
        <div className="flex md:flex-row flex-col md:gap-5 gap-15 mt-15">
          {/* left value */}
          <div className="md:min-h-100 gap-15 flex flex-col justify-between">
            {leftVlaue}
          </div>
          <div>
            <img src={Grocery} className=" md:flex w-150 hidden" />
          </div>
          {/* right value */}
          <div className="md:min-h-100 gap-15 flex flex-col justify-between">
            {rightVlaue}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;

const value = [
  {
    id: 1,
    tittle: "trust",
    pera: "it is a long established fact that a reader will be distrected by the readable.",
    icon: <FaHeart />,
  },
  {
    id: 2,
    tittle: "Always Freash",
    pera: "it is a long established fact that a reader will be distrected by the readable.",
    icon: <FaLeaf />,
  },
  {
    id: 3,
    tittle: "Food Saftey",
    pera: "it is a long established fact that a reader will be distrected by the readable.",
    icon: <FaShieldAlt />,
  },
  {
    id: 4,
    tittle: "100% Organic",
    pera: "it is a long established fact that a reader will be distrected by the readable.",
    icon: <FaSeedling />,
  },
];
