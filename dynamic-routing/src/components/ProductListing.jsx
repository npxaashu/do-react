import React from "react";
import { useProduct } from "../context/ProductContext";
import ProductCard from "./ProductCard";

const ProductListing = () => {
  const { products } = useProduct();
  return (
    <div className="mx-auto grid max-w-7xl gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductListing;
