import React from "react";
import NetLogo from "../../src/assets/assets/netLogo.png";
import bannerImg from "../assets/assets/banner.png";
import watchDemo from "../assets/watchDemo.png";

const Banner = () => {
  return (
    // banner section
    <section className="w-full py-12 lg:py-20 px-2">
      {/* banner container */}
      <div className="max-w-7xl w-full mx-auto flex flex-col lg:flex-row  justify-between gap-5 lg:gap-12">
        {/* banner left side */}
        <div className="space-y-2 lg:space-y-4 max-w-2xl flex flex-col justify-center items-start">
          {/* network section */}
          <div className="bg-[#E1E7FF] rounded-4xl w-full px-4 py-2 flex flex-row justify-center items-center gap-1.5 max-w-73 ">
            <img className="w-4 h-4" src={NetLogo} alt="" />
            <p className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
              New: AI-Powered Tools Available
            </p>
          </div>
          <h1
            className="font-extrabold text-4xl
           lg:text-6xl  text-[#101727] lg:leading-18"
          >
            Supercharge Your <br className="hidden lg:flex " /> Digital Workflow
          </h1>
          <p className="text-[#627382] text-xl leading-8 font-normal">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today. Explore
            Products
          </p>
          <div className="flex flex-row gap-2 lg:gap-4 lg:mt-4">
            <button
              className=" cursor-pointer bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white py-2 px-4 font-semibold text-base rounded-3xl
            "
            >
              Explore Products
            </button>
            <button
              className="cursor-pointer flex flex-row justify-center items-center py-2 px-4 font-semibold text-base rounded-3xl gap-2.5 border-2 border-[#4F39F6]
            bg-linear-to-r from-[#4F39F6] to-[#9514FA]  bg-clip-text text-transparent 
            "
            >
              <img className="w-3.5 h-3.5" src={watchDemo} alt="" />
              Watch Demo
            </button>
          </div>
        </div>
        {/* banner right side */}
        <div className="">
          <img className="" src={bannerImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
