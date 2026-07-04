import React from "react";
import Heading from "../Heading/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Customer1 from "../../assets/customer1.webp";
import Customer2 from "../../assets/customer2.webp";
import Customer3 from "../../assets/customer3.webp";
import Customer4 from "../../assets/customer4.webp";
import Customer5 from "../../assets/customer5.webp";
import "swiper/css";
import "swiper/css/navigation";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  return (
    <section>
      <div className="max-w[1400px] mx-auto px-10 py-10">
        <Heading highlight="Customers" heading="Saying" />
        <div className=" flex justify-end py-5 gap-x-3">
          <button className=" custom-next text-2xl text-zinc-800 rounded-lg w-11 h-11  flex justify-center items-center cursor-pointer bg-zinc-100 bg-red-500 hover:bg-red-400">
            <IoIosArrowForward />
          </button>
          <button className=" custom-prev text-2xl text-zinc-800 rounded-lg w-11 h-11  flex justify-center items-center cursor-pointer bg-zinc-100 hover:bg-gradient-to-b hover: from-orange-400 hover:to-orange-500">
            <IoIosArrowBack />
          </button>
        </div>

        <Swiper
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          loop={true}
          modules={[Navigation]}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
          }}
          className="mySwiper"
        >
          {review.map((item) => {
            return (
              <SwiperSlide key={item.id}className="bg-zinc-100 rounded-xl p-8">
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 rounded-full bg-red-500 outline-2 outline-orange overflow-hidden ">
                    <img src={item.Image} className="w-full h-full" />
                  </div>
                  <div className="mr-6">
                    <h5 className="text-xl font-bold">{item.name}</h5>
                    <p className="text-zinc-600">{item.profession}</p>
                    <span className="text-yellow-400 flex mt-3 text-xl gap-1">
                      {Array.from({ length: item.rating }, (_,index) => (
                        <FaStar key={index} />
                      ))}
                    </span>
                  </div>
                </div>
                <div className="mt-10 min-h-[15vh]">
                  <p className="text-zinc-600">{item.pera}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;

const review = [
  {
    id: "1",
    name: "Drishti",
    profession: "food bloger",
    rating: "4",
    pera: "freash basket is my go-to store for all grocery needs.there produce is always delivery in super fast. i love the user friendly interface and variety of organic options!",
    Image: Customer1,
  },
  {
    id: "2",
    name: "Shiva",
    profession: "chef",
    rating: "4",
    pera: "4as a chef,quality ingredient are everything.freshBasket consistently deliver les , heros, and pantky stapless. highly recommended!",
    Image: Customer2,
  },
  {
    id: "3",
    name: "Shweta",
    profession: "model",
    rating: "5",
    pera: "shopping online with freshBasket has saved me so much time. i trust them caries-laways fresh.  ",
    Image: Customer3,
  },
  {
    id: "4",
    name: "Kapil",
    profession: "model",
    rating: "3",
    pera: "shopping online with freshBasket has saved me so much time. i trust them caries-laways fresh. affordable. and reliable.",
    Image: Customer4,
  },
  {
    id: "5",
    name: "Tanu",
    profession: "model",
    rating: "3",
    pera: "shopping online with freshBasket has saved me so much time. i trust them caries-laways fresh. affordable. and reliable.",
    Image: Customer5,
  },
];
