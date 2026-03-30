import React from "react";

const EmptyCart = () => {
  return (
    <div className="bg-red-50  flex justify-center items-center flex-col py-10 border border-red-600 rounded-2xl">
      <h2 className="font-bold text-xl lg:text-2xl text-red-600">
        Your basket is empty.
      </h2>
      <h1 className="font-semibold text-sm lg:text-base text-red-600">
        Go to the product section to get started.
      </h1>
    </div>
  );
};

export default EmptyCart;
