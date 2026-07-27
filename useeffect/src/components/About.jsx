import React, { useEffect } from "react";

const About = () => {
  let interval = setInterval(() => {
    console.log("Hey i m in About");
  }, 1000);

  useEffect(() => {
    console.log("About rendering...");
    return () => {
      clearInterval(interval);

      console.log("I a'm triggered because About is unmounted");
    };
  }, []);

  return <div>About</div>;
};

export default About;
