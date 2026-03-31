import React from "react";
import { FcCheckmark } from "react-icons/fc";
import { IoMdCheckmarkCircle } from "react-icons/io";

const TransperPrice = () => {
  return (
    <section className=" py-7 md:py-10 lg:py-25 px-2 md:px-4   ">
      <div className="max-w-7xl w-full mx-auto flex justify-center items-center flex-col space-y-6  md:space-y-10 ">
        {/* top section */}
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold lg:font-extrabold  text-2xl md:text-3xl lg:text-5xl lg:mb-4 mb-2">
            Simple, Transparent Pricing
          </h1>
          <p className="font-normal text-sm  md:text-base text-center">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        {/* bottom section */}
        <div className=" mt-2 lg:mt-4 grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 sm:flex-row justify-between md:gap-1 gap-7 lg:gap-4 items-stretch w-full h-full ">
          {/* first pricing card */}
          <div
            className="flex w-full flex-col p-4 border-2  border-gray-300
                bg-gray-50  rounded-2xl gap-3 relative h-full md:hover:-translate-y-0.5 
                md:hover:shadow-[0_7px_20px_-10px_#4F39F6]
            md:hover:border-purple-300  transition-all duration-300 ease-in-out
        "
          >
            {/* top */}
            <div className="flex flex-col gap-3">
              {/* name */}
              <h2 className="font-bold text-2xl">Starter</h2>
              <p className="text-base text-[#627382]">
                Perfect for getting started
              </p>
            </div>

            {/* middle */}
            <div className="flex flex-col gap-3 mb-6">
              {/* price and period */}
              <div>
                <span className="h-full font-bold text-3xl md:text-4xl">
                  £0
                </span>
                <span className="text-base text-[#627382]">/Month</span>
              </div>
              {/* featured */}
              <div className="space-y-1.5">
                <div className="flex flex-row justify-start items-center gap-2  ">
                  <IoMdCheckmarkCircle className="text-green-600 w-5 h-5" />

                  <p className="text-sm lg:text-base text-[#627382]">
                    Access to 10 free tools
                  </p>
                </div>
                <div className="flex flex-row justify-start items-center gap-2  ">
                  <IoMdCheckmarkCircle className="text-green-600 w-5 h-5" />
                  <p className="text-sm lg:text-base text-[#627382]">
                    Basic templates
                  </p>
                </div>
                <div className="flex flex-row justify-start items-center gap-2  ">
                  <IoMdCheckmarkCircle className="text-green-600 w-5 h-5" />
                  <p className="text-sm lg:text-base text-[#627382]">
                    Community support
                  </p>
                </div>
                <div className="flex flex-row justify-start items-center gap-2  ">
                  <IoMdCheckmarkCircle className="text-green-600 w-5 h-5" />
                  <p className="text-sm lg:text-base text-[#627382]">
                    1 project per month
                  </p>
                </div>
              </div>
            </div>
            {/* bottom section */}
            <div className="flex flex-col  grow">
              {/* button to buy */}
              <div className="mt-auto">
                <button className="w-full text-base font-bold rounded-4xl py-2 md:py-3 px-6  bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white cursor-pointer  bg-purple-100">
                  Get Started Free
                </button>
              </div>
            </div>
          </div>
          {/* second pricing/Most popular card */}
          <div
            className="flex w-full flex-col p-4 border-2  
                  rounded-2xl gap-3 relative h-full md:hover:-translate-y-0.5 
                md:hover:shadow-[0_7px_20px_-10px_#4F39F6]
            md:hover:border-purple-300  text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] 
            transition-all duration-300 ease-in-out
        "
          >
            {/* top */}
            <div className="flex flex-col gap-3">
              {/* name */}
              <h2 className="font-bold text-2xl">Pro</h2>
              <p className="text-base text-white/90">Best for professionals</p>
            </div>

            {/* middle */}
            <div className="flex flex-col gap-3 mb-6">
              {/* price and period */}
              <div className="text-white/90">
                <span className="h-full font-bold text-3xl md:text-4xl text-white">
                  £29
                </span>
                <span className="text-base ">/Month</span>
              </div>
              {/* featured */}
              <div className="space-y-1.5">
                <div className="flex flex-row justify-start items-center gap-2  text-white">
                  <IoMdCheckmarkCircle className="text-white w-5 h-5" />

                  <p className="text-sm lg:text-base ">
                    Access to all premium tools
                  </p>
                </div>
                <div className="flex flex-row justify-start items-center gap-2  ">
                  <IoMdCheckmarkCircle className=" w-5 h-5" />
                  <p className="text-sm lg:text-base ">Unlimited templates</p>
                </div>
                <div className="flex flex-row justify-start items-center gap-2  ">
                  <IoMdCheckmarkCircle className=" w-5 h-5" />
                  <p className="text-sm lg:text-base ">Priority support</p>
                </div>
                <div className="flex flex-row justify-start items-center gap-2  ">
                  <IoMdCheckmarkCircle className=" w-5 h-5" />
                  <p className="text-sm lg:text-base ">Unlimited projects</p>
                </div>
                <div className="flex flex-row justify-start items-center gap-2  ">
                  <IoMdCheckmarkCircle className=" w-5 h-5" />
                  <p className="text-sm lg:text-base ">Cloud sync</p>
                </div>
                <div className="flex flex-row justify-start items-center gap-2  ">
                  <IoMdCheckmarkCircle className=" w-5 h-5" />
                  <p className="text-sm lg:text-base ">Advanced analytics</p>
                </div>
              </div>
            </div>
            {/* bottom section */}
            <div className="flex flex-col  grow">
              {/* button to buy */}
              <div className="mt-auto">
                <button className="w-full text-base font-bold rounded-4xl py-2 md:py-3 px-6 bg-white cursor-pointer hover:bg-gray-100 ">
                  <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent ">
                    Get Started Free
                  </span>
                </button>
              </div>
            </div>

            <div className="absolute -top-3 md:-top-4 left-1/2 -translate-x-1/2 right-2 w-1/2 lg:w-fit px-4 py-1  rounded-2xl  bg-yellow-200 text-yellow-700 font-semibold flex justify-center items-center  ">
              <p className="text-xs lg:text-sm">Most Popular</p>
            </div>
          </div>
          {/* third pricing card */}
          <div
            className="flex w-full flex-col p-4 border-2  border-gray-300
                bg-gray-50  rounded-2xl gap-3 relative h-full md:hover:-translate-y-0.5 
                md:hover:shadow-[0_7px_20px_-10px_#4F39F6]
            md:hover:border-purple-300  transition-all duration-300 ease-in-out
        "
          >
            {/* top */}
            <div className="flex flex-col gap-3">
              {/* name */}
              <h2 className="font-bold text-2xl">Enterprise</h2>
              <p className="text-base text-[#627382]">
                For teams and businesses
              </p>
            </div>

            {/* middle */}
            <div className="flex flex-col gap-3 mb-6">
              {/* price and period */}
              <div>
                <span className="h-full font-bold text-3xl md:text-4xl">
                  £99
                </span>
                <span className="text-base text-[#627382]">/Month</span>
              </div>
              {/* featured */}
              <div className="space-y-1.5">
                <div className="flex flex-row justify-start items-center gap-2  ">
                  <IoMdCheckmarkCircle className="text-green-600 w-5 h-5" />

                  <p className="text-sm lg:text-base text-[#627382]">
                    Everything in Pro
                  </p>
                </div>
                <div className="flex flex-row justify-start items-center gap-2  ">
                  <IoMdCheckmarkCircle className="text-green-600 w-5 h-5" />
                  <p className="text-sm lg:text-base text-[#627382]">
                    Team collaboration
                  </p>
                </div>
                <div className="flex flex-row justify-start items-center gap-2  ">
                  <IoMdCheckmarkCircle className="text-green-600 w-5 h-5" />
                  <p className="text-sm lg:text-base text-[#627382]">
                    Custom integrations
                  </p>
                </div>
                <div className="flex flex-row justify-start items-center gap-2  ">
                  <IoMdCheckmarkCircle className="text-green-600 w-5 h-5" />
                  <p className="text-sm lg:text-base text-[#627382]">
                    Dedicated support
                  </p>
                </div>
                <div className="flex flex-row justify-start items-center gap-2  ">
                  <IoMdCheckmarkCircle className="text-green-600 w-5 h-5" />
                  <p className="text-sm lg:text-base text-[#627382]">
                    SLA guarantee
                  </p>
                </div>
                <div className="flex flex-row justify-start items-center gap-2  ">
                  <IoMdCheckmarkCircle className="text-green-600 w-5 h-5" />
                  <p className="text-sm lg:text-base text-[#627382]">
                    Custom branding
                  </p>
                </div>
              </div>
            </div>
            {/* bottom section */}
            <div className="flex flex-col  grow">
              {/* button to buy */}
              <div className="mt-auto">
                <button className="w-full text-base font-bold rounded-4xl py-2 md:py-3 px-6  bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white cursor-pointer  bg-purple-100">
                  Get Started Free
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransperPrice;
