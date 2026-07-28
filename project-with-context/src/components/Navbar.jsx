import React from "react";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cartItems, setIsCartOpen } = useCart();
  return (
    <div className="bg-zinc-950 px-10 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-semibold">Logo</h1>

      <div className="flex gap-5">
        <p
          onClick={() => setIsCartOpen(false)}
          className="cursor-pointer hover:text-amber-300 select-none"
        >
          Home
        </p>
        <p
          onClick={() => setIsCartOpen(true)}
          className="cursor-pointer hover:text-amber-300 select-none relative"
        >
          Cart
          {cartItems.length > 0 && (
            <span className="text-xs absolute top-0 -right-5.5 rounded-full text-black font-semibold bg-amber-300 w-5 h-5 flex items-center justify-center">
              {cartItems.length}
            </span>
          )}
        </p>
      </div>

      <button className="bg-amber-300 text-black px-4 py-1 cursor-pointer hover:bg-amber-400">
        Login
      </button>
    </div>
  );
};

export default Navbar;
