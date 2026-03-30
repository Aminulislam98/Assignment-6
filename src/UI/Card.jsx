import React from "react";

import CardFeature from "./CardFeature";
import { toast } from "react-toastify";

const Card = ({ product, cartItem, setCartItem, isBought, setIsBought }) => {
  const isItemBought = isBought.includes(product.name);
  const tagStyles = {
    new: "bg-green-100 text-green-600",
    popular: "bg-purple-100 text-purple-600",
    "best-seller": "bg-yellow-100 text-yellow-600",
  };

  const addToCart = (id) => {
    if (id) {
      setCartItem([...cartItem, id]);
      setIsBought((prevName) => {
        return [...prevName, id.name];
      });
      toast.success("Added to your cart.", {
        pauseOnHover: false,
      });
    }
  };

  return (
    // used hover effect that already used in toggle button to keep look same
    <div
      className="flex flex-col p-4 border-2  border-purple-100
        bg-purple-50  rounded-2xl gap-3 relative h-full md:hover:-translate-y-0.5 
        md:hover:shadow-[0_7px_20px_-10px_#4F39F6]
       md:hover:border-purple-300
       transition-all duration-200 ease-in-out
        "
    >
      {/* top */}
      <div className="flex flex-col gap-3">
        {/* icon */}
        <div className=" mb-2 md:mb-4">
          <div className="text-4xl border border-gray-200 p-2 rounded-full max-w-15 max-h-15 flex justify-center items-center cursor-pointer hover:bg-purple-100 hover:text-[40px]">
            {product.icon}
          </div>
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
          {product.features.map((feature, index) => (
            <CardFeature key={index} feature={feature}></CardFeature>
          ))}
        </div>
      </div>
      {/* bottom section */}
      <div className="flex flex-col  grow">
        {/* button to buy */}
        <div className="mt-auto">
          <button
            onClick={() => {
              addToCart(product);
            }}
            disabled={isItemBought}
            className={`w-full text-base font-bold rounded-4xl py-2 md:py-3 px-6  ${
              isItemBought
                ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white transition-all duration-300 ease-in-out"
                : " bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent border-2 border-[#4F39F6]/20 hover:shadow-[0_2px_10px_-4px_#4F39F6] transition-all duration-300 ease-in-out"
            } cursor-pointer  bg-purple-100`}
          >
            {isItemBought ? "Added to Cart" : "Buy Now"}
          </button>
        </div>
      </div>

      <div className="space-y-4 flex flex-col mt-auto">
        <div
          className={`absolute top-2 right-2 ${tagStyles[product.tagType]}  py-1 px-4 rounded-2xl border`}
        >
          <p className="text-sm">{product.tag}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
