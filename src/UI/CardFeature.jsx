import React from "react";
import { FcCheckmark } from "react-icons/fc";
import { IoMdCheckmarkCircle } from "react-icons/io";

const CardFeature = ({ feature }) => {
  return (
    <div className="flex flex-row justify-start items-center gap-2  ">
      <IoMdCheckmarkCircle className="text-green-600 w-5 h-5" />
      <p className="text-sm lg:text-base text-[#627382]">{feature}</p>
    </div>
  );
};

export default CardFeature;
