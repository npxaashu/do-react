import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-zinc-950 px-10 py-3">
      <h1>Logo</h1>

      <div className="flex gap-5">
        <NavLink to={'/'} className="cursor-pointer hover:text-amber-300">Home</NavLink>
        <NavLink to={'/about'} className="cursor-pointer hover:text-amber-300">About</NavLink>
        <NavLink to={'/contact'} className="cursor-pointer hover:text-amber-300">Contact</NavLink>
      </div>

      <button className="px-4 py-1 bg-amber-300 text-black cursor-pointer">
        Login
      </button>
    </div>
  );
};

export default Navbar;
