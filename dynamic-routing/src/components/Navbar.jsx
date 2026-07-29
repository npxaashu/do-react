import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-zinc-950 px-10 py-4">
      <h1 className="logo text-2xl font-semibold">Logo</h1>

      <div className="flex gap-5">
        <NavLink to={"/"} className={"hover:text-amber-300"}>
          Home
        </NavLink>
        <NavLink to={"/store"} className={"hover:text-amber-300"}>
          Store
        </NavLink>
      </div>

      <button className="px-3 py-1 bg-amber-300 cursor-pointer">Login</button>
    </div>
  );
};

export default Navbar;
