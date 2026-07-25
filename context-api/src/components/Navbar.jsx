import React from "react";

const Navbar = ({ setIsCartOpen }) => {
  return (
    <div className="bg-zinc-950 flex items-center justify-between px-7 py-5">
      <div className="text-2xl">logo</div>

      <div className=" flex gap-5">
        <p onClick={() => setIsCartOpen(false)}>Home</p>
        <p onClick={() => setIsCartOpen(true)}>Cart</p>
      </div>

      <button className="bg-amber-300 text-black px-4 py-2 rounded-md cursor-pointer">
        Login
      </button>
    </div>
  );
};

export default Navbar;
