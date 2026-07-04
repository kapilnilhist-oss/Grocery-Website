import React from "react";
import Heading from "../Heading/Heading";
import FruitsCat from "../../assets/fruits-and-veggies.webp";
import SeaFoodCat from "../../assets/meat-and-seafood.webp";
import DairyCat from "../../assets/dairy-and-eggs.webp";
import { Link } from "react-router-dom";

const Category = () => {
  const renderCards = category.map((card) => {
    return (
      <div key={card.id} className="flex-1 basis-[300px]">
        {/* card images */}
        <div className="w-full min-h-[30vh] relative -mb-10 ">
          <img
            src={card.Image}
            alt={card.title}
            className="absolute bottom-0"
          />
        </div>

        {/* card content */}
        <div className="bg-zinc-100 pt-[68px] p-8 rounded-xl">
          <h3 className="text-zinc-800 text-3xl font-bold">{card.title}</h3>
          <p className="text-zinc-600 mt-3 mb-9">{card.Description}</p>
          <Link
            to={card.path}
            className="bg-gradient-to-b from-orange-400 to-orange-500 text-white px-8 py-3 rounded-lg hover:scale-105 hover: to-orange-600 transition-all duration-300 cursor-pointer md:text-lg text-md"
          >
            See All
          </Link>
        </div>
      </div>
    );
  });

  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10 py-20">
        <Heading highlight="Shop" heading="by Category" />

        {/* category card */}
        <div className="flex flex-wrap gap-10 md:mt-15">{renderCards}</div>
      </div>
    </section>
  );
};

export default Category;

const category = [
  {
    id: 1,
    tittle: "Fruts And Vegies",
    Description:
      "Fresh organic prouduct source daily from local farms.Explore a wide range of seasonal fruits and crisp vegetables",
    Image: FruitsCat,
    path: "/fruits",
  },
  {
    id: 2,
    tittle: "Dairy And Egges",
    Description:
      "Wholesome dairy product and free-range eggs.from creamy milk and yogurt to artisanal cheeses.",
    Image: DairyCat,
    path: "/dairy",
  },

  {
    id: 3,
    tittle: "Meat And SeaFood",
    Description:
      "high quality,responsibly sourced meat and seafood.choose from freash cuts,marinated option, and more",
    Image: SeaFoodCat,
    path: "/seafood",
  },
];
