import React from "react";
import BasketFull from "../../assets/basket-full-vegetables.webp";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <section>
      <div className=" bg-white min-h-screen max-w-[1400px]: max-auto md:flex-row flex-col px-10 flex items-center md:pt-25 pt-35">
        {/* hero content */}
        <div className="flex-1">
          <span className="bg-orange-100 text-orange-500 text-lg px-5 py-2 rounded-full">
            Fresh Groceries Delivered Fast
          </span>

            {/* Fruits, vegetables, dairy and daily essentials */}

          <h1 className="md:text-7xl/20 text-5xl/14 font-bold mt-4">
            Great quality <span className="text-orange-500">Fruits</span> & <span className="text-orange-500">Veggies</span> <br />
            in your city
          </h1>
          <p className="text-zinc-600 md:text-lg text-md max-w-[530px]: mt-5 mb-5">
            Bred for a high content of beneficial substance. our product are all
            freash and healthy
          </p>
          <Button content="All Now" />
        </div>

        {/* hero images */}
        <div className="flex-1">
          <img src={BasketFull} alt="Hero Image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
