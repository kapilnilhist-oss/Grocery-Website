import React, { useEffect, useState } from "react";
import { IoHeart } from "react-icons/io5";
import { HiShoppingBag } from "react-icons/hi2";
import { FaSearch } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { TbMenu3 } from "react-icons/tb";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrol, setScrol] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrol(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`bg-white fixed top-0 left-0 right-0 z-50 ${scrol ? "shadow-lg" : ""}`}
    >
      <nav className="max-w-[1400px] mx-auto md:h-[14vh] h-[12vh] px-10 flex justify-between items-center bg-amber-100 ">
        <a href="" className="text-3xl font-bold">
          Gr<span className="text-orange-500 uppercase">o</span>cify
        </a>
        <ul className=" md:flex items-center gap-x-15 hidden">
          <li>
            <a href="" className="font-semibold tracking-wider text-orange-500">
              home
            </a>
          </li>
          <li>
            <a
              href=""
              className="font-semibold tracking-wider
           hover:text-orange-500"
            >
              about us
            </a>
          </li>
          <li>
            <a
              href=""
              className="font-semibold tracking-wider hover:text-orange-500"
            >
              proces
            </a>
          </li>
          <li>
            <a
              href=""
              className="font-semibold tracking-wider hover:text-orange-500"
            >
              contact us
            </a>
          </li>
        </ul>

        {/* search bar */}

        <div className="flex align-center gap-x-5">
          {/* input field */}
          <div className=" md:flex p-1 border-2 border-orange-500 rounded-full hidden">
            <input
              type="text"
              name="text"
              id="text"
              placeholder="search....."
              autoComplete="off"
              className="flex-1 h-[5vh] px-3 focus:outline-none"
            />
            <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-10 w-10 flex justify-center items-center rounded-full text-xl cursor-pointer">
              <FaSearch />
            </button>
          </div>
          <div className="flex items-center justify-center gap-5">
            <a
              href=""
              className="text-zinc-800 text-2xl align-bottom items-center"
            >
              <IoHeart />
            </a>
            <a href="" className="text-zinc-800 text-2xl items-center">
              <HiShoppingBag />
            </a>
          </div>

          {/* hemburger */}

          <a
            href=""
            className="text-zinc-800 text-3xl md:hidden"
            onClick={toggleMenu}
          >
            {showMenu ? <TbMenu3 /> : <TiThMenu />}
          </a>
        </div>

        {/* menu bar for mobile */}

        <ul
          className={`flex  flex-col gap-y-12 bg-orange-500/15 backdrop-blur-xl rounded-xl p-10 items-center gap-x-15 shadow-xl md:hidden absolute top-30 -left-full transform -translate-x-1/2 transition-all duration-100 ${showMenu ? "left-1/2" : ""}`}
        >
          <li>
            <a href="" className="font-semibold tracking-wider text-orange-500">
              home
            </a>
          </li>
          <li>
            <a
              href=""
              className="font-semibold tracking-wider
           hover:text-orange-500"
            >
              about us
            </a>
          </li>
          <li>
            <a
              href=""
              className="font-semibold tracking-wider hover:text-orange-500"
            >
              proces
            </a>
          </li>
          <li>
            <a
              href=""
              className="font-semibold tracking-wider hover:text-orange-500"
            >
              contact us
            </a>
          </li>
          <li className=" flex p-1 border-2 border-orange-500 rounded-full md:hidden">
            <input
              type="text"
              name="text"
              id="text"
              placeholder="search....."
              autoComplete="off"
              className="flex-1 h-[5vh] px-3 focus:outline-none"
            />
            <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-10 w-10 flex justify-center items-center rounded-full text-xl cursor-pointer ">
              <FaSearch />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
