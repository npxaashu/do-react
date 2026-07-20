import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="w-full min-h-full p-10 flex flex-col gap-10">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
};

export default App;
