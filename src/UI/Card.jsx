import React from "react";

import CardFeature from "./CardFeature";

const Card = ({ product }) => {
  const tagStyles = {
    New: "bg-green-100 text-green-600",
    Popular: "bg-purple-100 text-purple-600",
    "Best Seller": "bg-yellow-100 text-yellow-600",
  };

  return (
    <div
      className={`flex flex-col p-4 border-2  border-gray-300  bg-purple-50  rounded-2xl gap-3 relative h-full`}
    >
      {/* top */}
      <div className="flex flex-col gap-3">
        {/* icon */}
        <div className=" mb-2 md:mb-4">
          <img src="" alt="ProductImage" />
        </div>
        {/* name */}
        <h2 className="font-bold text-2xl">{product.name}</h2>
        <p className="text-base text-[#627382]">{product.description}</p>
      </div>

      {/* middle */}
      <div className="flex flex-col gap-3 mb-6">
        {/* price and period */}
        <div>
          <span className="h-full font-bold text-xl md:text-2xl">
            £{product.price}
          </span>
          <span className="text-base text-[#627382]">/{product.period}</span>
        </div>
        {/* featured */}
        <div>
          {product.features.map((feature) => (
            <CardFeature feature={feature}></CardFeature>
          ))}
        </div>
      </div>
      {/* bottom section */}
      <div className="flex flex-col  grow">
        {/* button to buy */}
        <div className="mt-auto">
          <button className="w-full text-base font-bold rounded-4xl py-2 md:py-3 px-6 bg-linear-to-r  from-[#4F39F6] to-[#9514FA] text-white cursor-pointer shadow-[0_7px_20px_-7px_#4F39F6]">
            Buy Now
          </button>
        </div>
      </div>

      <div className="space-y-4 flex flex-col mt-auto">
        <div
          className={`absolute top-2 right-2 ${tagStyles[product.tag]}  py-1 px-4 rounded-2xl`}
        >
          <p className="text-sm">{product.tag}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
<div>
  <h2>HI</h2>
</div>;
