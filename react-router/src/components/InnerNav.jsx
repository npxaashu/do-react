import React from "react";
import { NavLink } from "react-router";

const InnerNav = () => {
  return (
    <div className="flex gap-5">
      <NavLink to={"/details"} className="cursor-pointer hover:text-amber-300">
        Details
      </NavLink>
    </div>
  );
};

export default InnerNav;
