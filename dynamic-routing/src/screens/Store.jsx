import React from "react";
import ProductListing from "../components/ProductListing";

const Store = () => {
  return (
    <div>
      <div className="page__header text-center py-10">
        <h1 className="text-5xl">Store</h1>
      </div>

      {/* Product Listing */}
      <ProductListing />
    </div>
  );
};

export default Store;
