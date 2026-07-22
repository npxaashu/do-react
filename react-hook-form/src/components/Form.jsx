import React, { useRef, useState } from "react";

const Form = () => {
  console.log("App rendering...");

  const formRef = useRef({});

  function handleSubmit(e) {
    e.preventDefault();

    console.log({
      productName: formRef.current.productName.value,
      price: formRef.current.price.value,
      category: formRef.current.category.value,
      image: formRef.current.image.value,
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white flex flex-col gap-5 w-[24rem] p-10 text-black font-semibold"
    >
      <input
        ref={(e) => (formRef.current.productName = e)}
        type="text"
        placeholder="Product Name"
        className="border border-gray-400 text-black px-4 py-2 outline-none"
      />
      <input
        ref={(e) => (formRef.current.price = e)}
        type="text"
        placeholder="Price"
        className="border border-gray-400 text-black px-4 py-2 outline-none"
      />

      <span>Select Category:</span>
      <select
        ref={(e) => (formRef.current.category = e)}
        className="border border-gray-400 text-black px-4 py-2 outline-none"
      >
        <option value="mens">Mens</option>
        <option value="womens">Womens</option>
        <option value="kids">Kids</option>
      </select>
      <input
        ref={(e) => (formRef.current.image = e)}
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

export default Form;
