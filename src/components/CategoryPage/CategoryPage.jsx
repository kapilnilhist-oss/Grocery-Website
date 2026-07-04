import React from "react";
import Butter from "../../assets/butter.webp";
import Strawberry from "../../assets/strawberry.webp";
import Eggs from "../../assets/eggs.webp";
import Cabbage from "../../assets/cabbage.webp";
import Eggplant from "../../assets/eggplant.webp";
import Shrimp from "../../assets/shrimp.webp";
import Kiwi from "../../assets/kiwi.webp";
import Capsicum from "../../assets/capsicum.webp";
import Broccoli from "../../assets/broccoli.webp";
import Yogurt from "../../assets/yogurt.webp";
import Beef from "../../assets/beef.webp";
import ChickenBreast from "../../assets/chicken-breast.webp";
import Kale from "../../assets/kale.webp";
import Cheese from "../../assets/cheese.webp";
import CondensedMilk from "../../assets/condensed-milk.webp";
import Salmon from "../../assets/salmon.webp";
import Banana from "../../assets/banana.webp";
import Milk from "../../assets/milk.webp";
import Pineapple from "../../assets/pineapple.webp";
import Tofu from "../../assets/tofu.webp";
import Tilapia from "../../assets/tilapia.webp";
import SliceCheese from "../../assets/slice-cheese.webp";
import RicottaCheese from "../../assets/ricotta-cheese.webp";
import Grapes from "../../assets/grapes.webp";
import Lettuce from "../../assets/lettuce.webp";
import Cards from "../Cards/Cards";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
const CategoryPage = ({ tittle, bgImage, categories = [] }) => {
  let filterItems = categories.includes("All")
    ? product
    : product.filter((item) => categories.includes(item.category));
  const renderPoint = filterItems.map((productList) => {
    return (
      <Cards
        image={productList.Image}
        name={productList.name}
        price={productList.price}
      />
    );
  });
  return (
    <div>
      <Banner tittle={tittle} bgImage={bgImage} />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-9 py-20 max-w-[1400] mx-auto px-10">
        {renderPoint}
      </div>
    </div>
  );
};

export default CategoryPage;

const product = [
  {
    id: 1,
    name: "strawberry",
    price: 3.0,
    category: "Fruits",
    Image: Strawberry,
  },
  {
    id: 2,
    name: "Butter",
    price: 3.5,
    category: "Dairy",
    Image: Butter,
  },
  {
    id: 3,
    name: "Eggs",
    price: 2.5,
    category: "Dairy",
    Image: Eggs,
  },
  {
    id: 4,
    name: "Cabbage",
    price: 3.0,
    category: "Vegetables",
    Image: Cabbage,
  },
  {
    id: 5,
    name: "Eggplant",
    price: 4.0,
    category: "vegetables",
    Image: Eggplant,
  },
  {
    id: 6,
    name: "Shrimp",
    price: 3.5,
    category: "SeaFood",
    Image: Shrimp,
  },
  {
    id: 7,
    name: "Kiwi",
    price: 2.5,
    category: "fruits",
    Image: Kiwi,
  },
  {
    id: 8,
    name: "Green Capsicum",
    price: 4.0,
    category: "vegetables",
    Image: Capsicum,
  },
  {
    id: 9,
    name: "Broccoli",
    price: 2.0,
    category: "vegetables",
    Image: Broccoli,
  },
  {
    id: 10,
    name: "yogurt",
    price: 3.0,
    category: "Dairy",
    Image: Yogurt,
  },
  {
    id: 11,
    name: "Beef",
    price: 8.0,
    category: "Meat",
    Image: Beef,
  },
  {
    id: 12,
    name: "Chicken Breast",
    price: 7.0,
    category: "Meat",
    Image: ChickenBreast,
  },
  {
    id: 13,
    name: "Kale Leaves",
    price: 3.0,
    category: "vegetables",
    Image: Kale,
  },
  {
    id: 14,
    name: "Mozzarella Cheese",
    price: 7.0,
    category: "Dairy",
    Image: Cheese,
  },
  {
    id: 15,
    name: "Condensed Milk",
    price: 5.0,
    category: "Dairy",
    Image: CondensedMilk,
  },
  {
    id: 16,
    name: "Slmon Filet",
    price: 4.0,
    category: "SeaFood",
    Image: Salmon,
  },
  {
    id: 17,
    name: "Banana",
    price: 3.0,
    category: "Fruits",
    Image: Banana,
  },
  {
    id: 18,
    name: "Milk Bottle",
    price: 8.0,
    category: "Dairy",
    Image: Milk,
  },
  {
    id: 19,
    name: "Pine Apple",
    price: 5.0,
    category: "Fruits",
    Image: Pineapple,
  },
  {
    id: 20,
    name: "Tofu Cubes",
    price: 4.0,
    category: "Dairy",
    Image: Tofu,
  },
  {
    id: 21,
    name: "Tilapia Fish",
    price: 3.0,
    category: "Meat",
    Image: Tilapia,
  },
  {
    id: 22,
    name: "Slice-Cheese",
    price: 5.0,
    category: "Dairy",
    Image: SliceCheese,
  },
  {
    id: 23,
    name: "Ricotta Cheese",
    price: 7.0,
    category: "Dairy",
    Image: RicottaCheese,
  },
  {
    id: 24,
    name: "Grapes",
    price: 3.0,
    category: "Fruits",
    Image: Grapes,
  },
  {
    id: 25,
    name: "Lettuce Leaf",
    price: 3.0,
    category: "Vegetables",
    Image: Lettuce,
  },
];
