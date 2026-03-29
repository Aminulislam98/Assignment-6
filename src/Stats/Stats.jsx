import React from "react";

const Stats = () => {
  return (
    // rating section
    <section className="bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
      {/* rating container */}
      <div className="rating-container flex flex-row max-w-5xl w-full mx-auto py-8 lg:py-15 justify-between">
        <div className="flex flex-col justify-center items-center space-y-3">
          <h2 className="text-3xl font-semibold lg:text-6xl lg:font-extrabold text-white">
            50K+
          </h2>
          <p className="text-gray-200 text-xl  lg:text-3xl">Active Users</p>
        </div>
        <div className="flex flex-col justify-center items-center space-y-3">
          <h2 className="text-3xl font-semibold lg:text-6xl lg:font-extrabold text-white">
            200K+
          </h2>
          <p className="text-gray-200 text-xl  lg:text-3xl">Premium Tools</p>
        </div>
        <div className="flex flex-col justify-center items-center space-y-3">
          <h2 className="text-3xl font-semibold lg:text-6xl lg:font-extrabold text-white">
            4.9
          </h2>
          <p className="text-gray-200 text-xl  lg:text-3xl">Rating</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
