import React from "react";

const WorkFlow = () => {
  return (
    <section className="bg-linear-to-r from-[#4F39F6] to-[#9514FA]  py-8 md:py-15 lg:py-30 px-2 md:px-4 mb-67">
      <div className="flex flex-col justify-center items-center ">
        <h1 className=" text-center font-semibold lg:font-extrabold  text-xl md:text-3xl lg:text-5xl lg:mb-4 mb-2 text-white">
          Ready to Transform Your Workflow?
        </h1>
        <p className="font-normal text-xs md:text-base text-center text-white/80">
          Join thousands of professionals who are already using Digi tools to
          work smarter. <br className="hidden md:flex" />
          Start your free trial today.
        </p>
        <div className="flex flex-row justify-center gap-2 lg:gap-4 my-3 lg:mt-4 w-full lg:w-auto mt-5 md:mt-7 ">
          <button className=" lg:w-auto cursor-pointer bg-white text-transparent py-2 px-4 font-semibold text-base rounded-3xl">
            <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA]  bg-clip-text text-transparent">
              Explore Products
            </span>
          </button>
          <button
            className=" lg:w-auto cursor-pointer flex flex-row justify-center items-center md:py-2 py-1 px-4 md:px-4 font-semibold text-base rounded-3xl gap-2.5 border border-white  text-white
                    "
          >
            View Pricing
          </button>
        </div>
        <p className="text-white text-xs md:text-sm lg:text-base">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default WorkFlow;
