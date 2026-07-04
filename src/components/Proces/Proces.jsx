import React from "react";
import Heading from "../Heading/Heading";
import {
  TbCircleNumber1Filled,
  TbCircleNumber2Filled,
  TbCircleNumber3Filled,
  TbCircleNumber4Filled,
} from "react-icons/tb";
import { PiFactory, PiPlant } from "react-icons/pi";
import { SlBadge } from "react-icons/sl";
import { BsTruck } from "react-icons/bs";

const Proces = () => {
  const renderSteps = steps.map((item) => {
    return (
      <div
        key={item.id}
        className={`flex-1 basis-[300px] ${item.id % 2 === 0 ? "md:-mt-100" : ""}`}
      >
        <span className="flex justify-center mx-auto items-center w-18 h-18 rounded-full text-8xl bg-zinc-800 text-white outline-[3px] outline-offset-7 outline-zinc-800 outline-dashed">
          {item.number}
        </span>
        <div className="flex gap-x-5 items-center mt-10">
          <span className="flex bg-orange-500 text-white justify-center text-3xl rounded-full w-15 h-15 items-center">
            {item.icon}
          </span>

          <div className="flex-1">
            <h4 className="text-zinc-800 text-2xl font-bold">{item.tittle}</h4>
            <p className="text-zinc-600 mt-2">{item.pera}</p>
          </div>
        </div>
      </div>
    );
  });
  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10 py-20">
        <div className="w-fit mr-auto">
          <Heading highlight="our" heading="proces" />
        </div>
        <div className="flex flex-wrap md:flex-nowrap gap-y-17 items-center justify-center md:mt-20 mt-10 md:pt-50 ">
          {renderSteps}
        </div>
      </div>
    </section>
  );
};

export default Proces;

const steps = [
  {
    id: 1,
    number: <TbCircleNumber1Filled />,
    tittle: "sourcing",
    pera: "it is a long established fact that a reader ",
    icon: <PiPlant />,
  },
  {
    id: 2,
    number: <TbCircleNumber2Filled />,
    tittle: "Manufacturing",
    pera: "it is a long established fact that a reader",
    icon: <PiFactory />,
  },
  {
    id: 3,
    number: <TbCircleNumber3Filled />,
    tittle: "Quality Control",
    pera: "it is a long established fact that a reader ",
    icon: <SlBadge />,
  },
  {
    id: 4,
    number: <TbCircleNumber4Filled />,
    tittle: "Logistics",
    pera: "it is a long established fact that a reader ",
    icon: <BsTruck />,
  },
];
