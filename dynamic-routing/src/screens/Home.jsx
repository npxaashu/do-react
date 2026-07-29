import React from "react";
import ProductListing from "../components/ProductListing";

const Home = () => {
  return (
    <div>
      <div className="hero bg-zinc-950 w-full min-h-120 mt-10 rounded-2xl flex items-center justify-center">
        <h1 className="text-7xl text-amber-300">Welcome to My Store</h1>
      </div>

      {/* Product Listing */}
      <ProductListing />
    </div>
  );
};

export default Home;
