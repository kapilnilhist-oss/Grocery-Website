import React from "react";
import CategoryPage from "../CategoryPage/CategoryPage";
import BgDairy from "../../assets/dairy-and-eggs.webp";
const Dairy = () => {
  return (
    <CategoryPage
      tittle="Dairy & Eggs"
      bgImage={BgDairy}
      categories={["Dairy"]}
    />
  );
};

export default Dairy;
