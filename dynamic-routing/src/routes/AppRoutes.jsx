import React from "react";
import { Route, Routes } from "react-router";
import Home from "../screens/Home";
import Store from "../screens/Store";
import ProductDetail from "../screens/ProductDetail";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/store/:id" element={<ProductDetail />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
