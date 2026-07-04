
import CategoryPage from "../CategoryPage/CategoryPage";
import BgSeaFood from "../../assets/seafood-banner.webp";

const SeeFood = () => {
  return (
    <div>
      <CategoryPage
        tittle="SeaFood"
        bgImage={BgSeaFood}
        categories={["SeaFood"]}
      />
    </div>
  );
};

export default SeeFood;
