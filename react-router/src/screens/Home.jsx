import React from "react";
import { Outlet } from "react-router";
import InnerNav from "../components/InnerNav";

const Home = () => {
  return (
    <>
      <div>
        <h1>Home Page</h1>
        <InnerNav />
      </div>

      <Outlet />
    </>
  );
};

export default Home;
