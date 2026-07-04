
import Hero from "../Hero/Hero";
import Category from "../Category/Category";
import Values from "../Values/Values";
import Products from "../Products/Products";
import Discount from "../Discount/Discount";
import Proces from "../Proces/Proces";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Hero />
      <Category />
      <Values />
      <Products />
      <Discount />
      <Proces />
      <Testimonials />
    </div>
  );
};

export default Home;