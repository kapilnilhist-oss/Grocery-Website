import React from "react";
import Category from "../Category/Category";
import CategoryPage from "../CategoryPage/CategoryPage";
import BgFruits from "../../assets/fruits-banner.webp";

const Fruits = () => {
  return (
    <div>
      <CategoryPage
        tittle="Fruits & Veggies"
        bgImage={BgFruits}
        categories={["Fruits", "Vegetables"]}
      />
    </div>
  );
};

export default Fruits;
