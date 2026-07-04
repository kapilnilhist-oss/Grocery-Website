import React from "react";

const Banner = ({ tittle, bgImage }) => {
  return (
    <div
      className=" h-[50vh] mt-25 flex justify-center items-center bg-center bg-cover relative
    "
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <h2 className="text-zinc-800 font-bold text-5xl bg-white p-5 rounded-xl">
        {tittle}
      </h2>
    </div>
  );
};

export default Banner;
