
import BgAll from "../../assets/all-banner.webp";
import CategoryPage from "../CategoryPage/CategoryPage";

const AllProduct = () => {
  return (
    <CategoryPage tittle="All Product" bgImage={BgAll} categories={["All"]} />
  );
};

export default AllProduct;
