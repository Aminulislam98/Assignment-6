import React, { use } from "react";
import Card from "../UI/Card";

const CardSection = ({ toggleHandler, setToggleHandler, productsList }) => {
  const products = use(productsList);
  console.log(products.length);
  const buttonHandler = (type) => {
    if (type === "Products") {
      setToggleHandler("Products");
    }
    if (type === "Cart") {
      setToggleHandler("Cart");
    }
  };
  return (
    <section className="w-full py-12 lg:p-y-20 px-0 md:px-4">
      <div className="max-w-7xl w-full mx-auto px-2 lg:px-0">
        {/* top section */}
        <div className="w-full mx-auto flex flex-col justify-center items-center ">
          <div className="space-y-2 lg:space-y-4 flex flex-col justify-center items-center">
            <h2 className="font-extrabold text-3xl  md:text-5xl">
              Premium Digital Tools
            </h2>
            <p className="text-base text-[#627382] text-center">
              Choose from our curated collection of premium digital products
              designed <br className="hidden md:flex" /> to boost your
              productivity and creativity.
            </p>
            <div className="border-2 border-[#4F39F6]/20 p-1 rounded-4xl flex flex-row justify-center items-center mx-auto gap-2 w-fit mt-3">
              <button
                onClick={() => {
                  buttonHandler("Products");
                }}
                className={
                  toggleHandler === "Products"
                    ? "text-base font-bold   rounded-4xl py-2 md:py-3.5 px-6 bg-linear-to-r  from-[#4F39F6] to-[#9514FA] text-white cursor-pointer shadow-[0_7px_20px_-7px_#4F39F6]"
                    : "text-base font-bold rounded-4xl py-2 md:py-3.5 px-6 border border-gray-300 text-black cursor-pointer hover:bg-[#4F39F6]/10 hover:text-[#9514FA]"
                }
              >
                Products
              </button>
              <button
                onClick={() => {
                  buttonHandler("Cart");
                }}
                className={
                  toggleHandler === "Cart"
                    ? "text-base font-bold   rounded-4xl py-2 md:py-3.5 px-6 bg-linear-to-r  from-[#4F39F6] to-[#9514FA] text-white cursor-pointer shadow-[0_7px_20px_-7px_#4F39F6]"
                    : "text-base font-bold rounded-4xl py-2 md:py-3.5 px-6 border border-gray-300 text-black cursor-pointer hover:bg-[#4F39F6]/10 hover:text-[#9514FA]"
                }
              >
                Cart
              </button>
            </div>
          </div>
        </div>
        {/* card container */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <Card></Card>
        </div>
      </div>
    </section>
  );
};

export default CardSection;
<div>top</div>;
// text-base font-bold   rounded-4xl py-2 md:py-3.5 px-6 bg-linear-to-r  from-[#4F39F6] to-[#9514FA] text-white cursor-pointer
