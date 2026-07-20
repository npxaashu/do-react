import React, { useState } from "react";

const Hero = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="bg-zinc-500 min-h-60 p-4 text-center text-[4rem] rounded-xl">
      <h2>Count:{count}</h2>

      <button
        className="text-[2rem] bg-red-500 px-4 rounded-md mr-4"
        onClick={() => count == 0 || setCount(count - 1)}
      >
        Decrease
      </button>

      <button
        className="text-[2rem] bg-blue-500 px-4 rounded-md ml-4"
        onClick={() => setCount(count + 1)}
      >
        Increase
      </button>
    </div>
  );
};

export default Hero;
