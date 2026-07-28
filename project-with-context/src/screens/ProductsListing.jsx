import React from "react";
import ProductCard from "../components/ProductCard";
import { useProduct } from "../context/ProductContext";
import { useCart } from "../context/CartContext";

const ProductsListing = () => {
  const { products } = useProduct();
  const { setCartItems } = useCart();

  return (
    <div className="mx-auto grid max-w-7xl gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
};

export default ProductsListing;
