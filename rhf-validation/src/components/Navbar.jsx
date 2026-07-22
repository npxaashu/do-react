import React from "react";

const Navbar = ({ setToggle }) => {
  return (
    <div className="bg-zinc-900 flex justify-between items-center px-5 py-5 rounded-md">
      <h1 className="text-3xl font-bold">Logo</h1>

      <nav className="flex gap-7">
        <p className="cursor-pointer hover:text-yellow-300">Home </p>
        <p className="cursor-pointer hover:text-yellow-300">About </p>
        <p className="cursor-pointer hover:text-yellow-300">Contact</p>
      </nav>

      <button
        onClick={() => setToggle((prev) => !prev)}
        className="bg-yellow-300 text-black font-semibold hover:bg-yellow-500 px-4 py-2 rounded-md cursor-pointer"
      >
        Create User
      </button>
    </div>
  );
};

export default Navbar;
