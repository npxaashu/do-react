import React, { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({});

  console.log("Form Data -> ", formData);

  const handleChange = (e) => {
    let { name, value } = e.target;

    (e) => setFormData({ ...formData, name: value });
  };

  return ( 
    <div className="text-6xl">
      <input
        name="name"
        type="text"
        placeholder="Name.."
        onChange={handleChange}
      />
      <br />
      <br />
      <input
        name="email"
        type="text"
        placeholder="Email.."
        onChange={handleChange}
      />
      <br />
      <br />
      <input
        name="password"
        type="text"
        placeholder="Password.."
        onChange={handleChange}
      />
      <br />
    </div>
  );
};

export default App;
