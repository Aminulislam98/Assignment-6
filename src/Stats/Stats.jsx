import React from "react";

const Stats = () => {
  return (
    // rating section
    <section className="bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
      {/* rating container */}
      <div className="rating-container flex flex-row max-w-5xl w-full mx-auto py-8 lg:py-15 justify-between">
        <div className="flex flex-col justify-center items-center space-y-3">
          <h2 className="text-3xl font-semibold lg:text-6xl lg:font-bold text-white">
            50K+
          </h2>
          <p className="text-[#FFFFFF]">Active Users</p>
        </div>
        <div className="flex flex-col justify-center items-center space-y-3">
          <h2 className="text-3xl font-semibold lg:text-6xl lg:font-bold text-white">
            200K+
          </h2>
          <p className="text-[#FFFFFF]">Premium Tools</p>
        </div>
        <div className="flex flex-col justify-center items-center space-y-3">
          <h2 className="text-3xl font-semibold lg:text-6xl lg:font-bold text-white">
            4.9
          </h2>
          <p className="text-[#FFFFFF]">Rating</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
