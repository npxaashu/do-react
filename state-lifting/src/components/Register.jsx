import { nanoid } from "nanoid";
import React, { useState } from "react";

const Register = ({ setIsRegistered, setUsers }) => {
  const [formData, setFormData] = useState({});



  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    formData.id = nanoid(10);

    // users.push(newUser);
    setUsers((prev) => [...prev, formData]);

    setFormData({});
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center flex-col gap-5">
      <h2 className="text-4xl font-semibold">Register</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-zinc-800 flex flex-col gap-5 px-10 py-12 rounded-lg"
      >
        <input
          name="name"
          type="text"
          required
          placeholder="Enter name..."
          className="bg-zinc-950 px-4 py-2  rounded-md"
          value={formData.name ?? ""}
          onChange={handleChange}
        />
        <input
          name="email"
          type="text"
          required
          placeholder="Enter email..."
          className="bg-zinc-950 px-4 py-2  rounded-md"
          value={formData.email ?? ""}
          onChange={handleChange}
        />
        <input
          name="password"
          type="text"
          required
          placeholder="Enter password"
          className="bg-zinc-950 px-4 py-2  rounded-md"
          value={formData.password ?? ""}
          onChange={handleChange}
        />
        <button className="bg-yellow-400 text-black font-semibold px-4 py-2  rounded-md cursor-pointer">
          Register
        </button>
      </form>
      <p>
        Already have an account?{" "}
        <span
          onClick={() => setIsRegistered((prev) => !prev)}
          className="text-yellow-400 underline cursor-pointer"
        >
          Login here
        </span>
      </p>
    </div>
  );
};

export default Register;
