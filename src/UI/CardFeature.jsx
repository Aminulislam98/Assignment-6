import React from "react";
import { FcCheckmark } from "react-icons/fc";

const CardFeature = ({ feature }) => {
  return (
    <div className="flex flex-row justify-start items-center gap-2  ">
      <FcCheckmark className="text-green-500 w-5 h-5" />
      <p className="text-sm lg:text-base text-[#627382]">{feature}</p>
    </div>
  );
};

export default CardFeature;
