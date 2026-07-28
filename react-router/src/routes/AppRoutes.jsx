import React from "react";
import { Route, Routes } from "react-router";
import Home from "../screens/Home";
import About from "../screens/About";
import Contact from "../screens/Contact";
import Details from "../screens/Details";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/details" element={<Details />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
