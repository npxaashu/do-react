import React, { useEffect, useState } from "react";
import Contact from "./components/Contact";
import About from "./components/About";

const App = () => {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    console.log("App rendering...");
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
      <br />

      <button
        className="bg-gray-500 px-4 py-2"
        onClick={() => setCount(count + 1)}
      >
        Increase
      </button>

      <br />
      {toggle ? <Contact /> : <About />}
      <br />
      <button
        className="bg-gray-500 px-4 py-2"
        onClick={() => setToggle((prev) => !prev)}
      >
        Change Toggle
      </button>
    </div>
  );
};

export default App;
