import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";

const RHF = () => {
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  function submitHandler(data) {
    console.log(data);

    reset();
  }

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="bg-white flex flex-col gap-5 w-[24rem] p-10 text-black font-semibold"
    >
      <input
        {...register("productName")}
        type="text"
        placeholder="Product Name"
        className="border border-gray-400 text-black px-4 py-2 outline-none"
      />
      <input
        {...register("price")}
        type="text"
        placeholder="Price"
        className="border border-gray-400 text-black px-4 py-2 outline-none"
      />
      <input
        {...register("category")}
        type="text"
        placeholder="Category"
        className="border border-gray-400 text-black px-4 py-2 outline-none"
      />
      <input
        {...register("image")}
        type="text"
        placeholder="Image"
        className="border border-gray-400 text-black px-4 py-2 outline-none"
      />
      <button className="bg-blue-500 px-4 py-2 outline-none cursor-pointer">
        Create
      </button>
    </form>
  );
};

export default RHF;
