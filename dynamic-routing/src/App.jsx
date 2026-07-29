import React from "react";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <main className="py-3 px-10 w-full min-h-screen bg-zinc-900 text-white text-xl">
      <Navbar />
      <AppRoutes />
    </main>
  );
};

export default App;
