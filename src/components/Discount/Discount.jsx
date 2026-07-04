import React from "react";
import Button from "../Button/Button";
import FreashFruits from "../../assets/fresh-fruits.webp";
const Discount = () => {
  return (
    <section
      className="bg-zinc-100 bg-contain bg-no-repeat bg-right"
      style={{ backgroundImage: `url(${FreashFruits})` }}
    >
      <div className=" md:bg-transparent bg-zinc-100 md:flex-row flex-col max-w-[1400px] flex mx-auto px-10 py-10">
        <span className="md:text-9xl text-6xl text-orange-500 font-bold transform md:-rotate-90 md:self-center">
          20%
        </span>
        <div className="max-w-[700px]">
          <h3 className="md:text-7xl text-4xl text-zinc-800 font-bold">
            First Order Discount!
          </h3>
          <p className="text-zinc-600 my-6">
            Enjoy an exclusive firts order discount on your grocery website!
            shop free aseentails and savebig on your first purchase.Fast
            delivery and quality
          </p>
          <Button content=" Get a Discount" />
        </div>
      </div>
    </section>
  );
};

export default Discount;
