import React from "react";

const TransperPrice = () => {
  return (
    <section className="bg-pu py-15 lg:py-30 px-2 bg-gray-50 mt-20  ">
      <div className="max-w-7xl w-full mx-auto flex justify-center items-center flex-col  space-y-4">
        {/* top section */}
        <div className="flex flex-col justify-center items-center">
          <h1 className=" font-semibold lg:font-extrabold  text-2xl lg:text-5xl lg:mb-4 mb-2">
            Simple, Transparent Pricing
          </h1>
          <p className="font-normal text-base">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        {/* bottom section */}
        <div className=" mt-2 lg:mt-4 flex wrap flex-col sm:flex-row justify-between  lg:gap-6  items-stretch w-full">
          <div className=" bg-white py-11 lg:py-22 flex flex-col justify-center items-center w-full space-y-2 lg:space-y-4 border border-purple-100 rounded-xl px-5 ">
            <h3 className="font-bold text-base lg:text-2xl">Create Account</h3>
            <p className="font-normal text-sm  text-center">
              Sign up for free in seconds. No credit card <br /> required to get
              started.
            </p>
          </div>
          <div className=" bg-white py-11 lg:py-22 flex flex-col justify-center items-center w-full space-y-2 lg:space-y-4 border border-purple-100 rounded-xl px-5">
            <h3 className="font-bold text-base lg:text-2xl">Choose Products</h3>
            <p className="font-normal text-sm text-center">
              Browse our catalog and select the tools <br />
              that fit your needs.
            </p>
          </div>
          <div className=" bg-white py-11 lg:py-22 flex flex-col justify-center items-center w-full space-y-2 lg:space-y-4 border border-purple-100 rounded-xl px-5">
            <h3 className="font-bold text-base lg:text-2xl">Start Creating</h3>
            <p className="font-normal text-sm  text-center">
              Download and start using your premium <br /> tools immediately.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransperPrice;
