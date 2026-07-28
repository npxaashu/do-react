import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Cart from "./screens/Cart";
import ProductsListing from "./screens/ProductsListing";
import { useCart } from "./context/CartContext";

const App = () => {
  const { isCartOpen } = useCart();

  return (
    <main className="min-h-screen w-full bg-zinc-900 text-white text-xl p-4">
      <Navbar />
      {isCartOpen ? <Cart /> : <ProductsListing />}
    </main>
  );
};

export default App;
