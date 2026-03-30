import React from "react";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";

const Cart = ({ cart, cartItem, setCartItem, setIsBought }) => {
  const deleteItem = (id) => {
    const exist = cartItem.find((item) => item.id === id.id);
    if (exist) {
      const updatedCart = cartItem.filter(
        (prevCartsItem) => prevCartsItem.id !== id.id,
      );
      setCartItem(updatedCart);

      setIsBought((prevName) => {
        return prevName.filter((pName) => pName !== id.name);
      });

      toast.success("Removed from your cart.", {
        pauseOnHover: false,
      });
      if (updatedCart.length === 0) {
        toast.error("Oops! Your cart is empty.", {
          pauseOnHover: false,
        });
      }
    }
  };
  return (
    <div
      className="py-3 px-3 lg:px-4 rounded-xl lg:rounded-4xl bg-purple-50 flex justify-between items-center border border-purple-200
    md:hover:-translate-y-0.5 
        md:hover:shadow-[0_7px_20px_-10px_#4F39F6]
       md:hover:border-purple-300
    "
    >
      {/* icon and name section */}
      <div className="flex flex-row justify-center items-center gap-3">
        {/* cart icon */}
        <div className="text-xl md:text-3xl border border-gray-200 p-2 rounded-full w-12 h-12 md:w-15 md:h-15 flex justify-center items-center cursor-pointer hover:bg-purple-100 ">
          {cart.icon}
        </div>
        {/* cart name and price */}
        <div className="flex flex-col justify-start items-start">
          <h3 className="font-medium text-base lg:text-xl">{cart.name}</h3>
          <p className="font-medium text-sm md:text-base text-[#627382]">
            £{cart.price}
          </p>
        </div>
      </div>
      {/* delete section */}
      <div>
        {/* delete button */}
        <button
          onClick={() => {
            deleteItem(cart);
          }}
          className="border-2 rounded-full p-1 md:p-2 border-red-200 hover:bg-red-200 hover:border-red-300"
        >
          <MdDelete className="text-red-600 w-5 md:w-6 h-5 md:h-6" />
        </button>
      </div>
    </div>
  );
};

export default Cart;
