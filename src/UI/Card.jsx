import React from "react";
import { FcCheckmark } from "react-icons/fc";

const Card = () => {
  return (
    <div className="flex flex-col p-6 border-2 border-purple-300 bg-purple-200 rounded-2xl space-y-4 relative">
      <div className="absolute top-2 right-2 bg-yellow-100 text-yellow-600 py-1 px-4 rounded-2xl">
        <p className="text-sm">Demand</p>
      </div>
      <div className=" mb-2 md:mb-4">
        <img src="" alt="ProductImage" />
      </div>
      <h2
        className="font-bold
       text-2xl"
      >
        AI Writing Pro
      </h2>
      <p className="text-base text-[#627382]">
        Generate high-quality content, blogs, and marketing copy in seconds with
        advanced AI.
      </p>
      <div>
        <span
          className="font-bold
       text-2xl"
        >
          £29
        </span>
        <span className="text-base text-[#627382]">/Mon</span>
      </div>
      <div className="flex flex-row justify-start items-center gap-2">
        <FcCheckmark className="text-green-500 w-5 h-5" />
        <p className="text-base text-[#627382]">Unlimited AI generations</p>
      </div>
      <div>
        <button className="w-full text-base font-bold   rounded-4xl py-2 md:py-3 px-6 bg-linear-to-r  from-[#4F39F6] to-[#9514FA] text-white cursor-pointer shadow-[0_7px_20px_-7px_#4F39F6]">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Card;
<div>
  <h2>HI</h2>
</div>;
