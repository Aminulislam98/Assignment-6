import React, { use } from "react";
import Card from "../UI/Card";
import Cart from "../UI/Cart";
import EmptyCart from "../UI/EmptyCart";
import { toast } from "react-toastify";

const CardSection = ({
  toggleHandler,
  setToggleHandler,
  productsList,
  cartItem,
  setCartItem,
  isBought,
  setIsBought,
}) => {
  const totalCartPrice = cartItem.reduce((totalPrice, eachItem) => {
    return totalPrice + eachItem.price;
  }, 0);
  const products = use(productsList);
  const buttonHandler = (type) => {
    if (type === "Products") {
      setToggleHandler("Products");
    }
    if (type === "Cart") {
      setToggleHandler("Cart");
    }
  };

  const proceedToCheckout = () => {
    setCartItem([]);
    setIsBought([]);

    toast.success("Checkout successful!", {
      pauseOnHover: false,
    });
  };
  return (
    <section className="w-full pb-12 lg:p-y-20 px-0 md:px-2 ">
      <div className="max-w-7xl w-full mx-auto px-2 lg:px-0 space-y-10">
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
                    ? "text-base font-bold   rounded-4xl py-2 md:py-3.5 px-6 bg-linear-to-r  from-[#4F39F6] to-[#9514FA] text-white cursor-pointer shadow-[0_7px_20px_-7px_#4F39F6] transition-all duration-300 ease-in-out"
                    : "text-base font-bold rounded-4xl py-2 md:py-3.5 px-6 border border-gray-300 text-black cursor-pointer hover:bg-[#4F39F6]/10 hover:text-[#9514FA] transition-all duration-300 ease-in-out"
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
        {toggleHandler === "Products" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 items-stretch">
            {products.map((product) => (
              <Card
                key={product.id}
                product={product}
                cartItem={cartItem}
                setCartItem={setCartItem}
                isBought={isBought}
                setIsBought={setIsBought}
              ></Card>
            ))}
          </div>
        ) : (
          <div className="border border-gray-200 px-2 py-3 lg:p-4 rounded-2xl md:rounded-4xl space-y-4 lg:space-y-6 ">
            {cartItem.length === 0 ? (
              ""
            ) : (
              <h2 className="font-bold md:font-bold text-xl md:text-2xl flex justify-center items-center md:justify-start md:items-center bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
                Your Cart
              </h2>
            )}
            <div className=" gap-2 items-stretch flex flex-col">
              {cartItem.length === 0 ? (
                <>
                  <EmptyCart></EmptyCart>
                </>
              ) : (
                <>
                  {cartItem.map((cart) => (
                    <Cart
                      key={cart.id}
                      cart={cart}
                      setCartItem={setCartItem}
                      cartItem={cartItem}
                      isBought={isBought}
                      setIsBought={setIsBought}
                    ></Cart>
                  ))}
                  <div>
                    <div className="flex justify-between items-center mt-10">
                      <p className="text-[#627382]">Total:</p>
                      <p className="font-semibold text-base  md:text-2xl">
                        £{totalCartPrice}
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        proceedToCheckout();
                      }}
                      className="text-sm lg:text-base font-bold w-full rounded-4xl py-2 md:py-3.5 px-6 bg-linear-to-r
                      from-[#4F39F6] to-[#9514FA] text-white cursor-pointer md:hover:-translate-y-0.5 
                      md:hover:shadow-[0_7px_20px_-10px_#4F39F6]
                    md:hover:border-purple-300 mt-5 flex justify-center items-center transition-all duration-300 ease-in-out"
                    >
                      Proceed to Checkout
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CardSection;
