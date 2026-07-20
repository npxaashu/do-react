import React from "react";

const Card = ({ product, deleteProduct }) => {
  return (
    <>
      <div className="card w-[20rem] bg-zinc-700 p-6 rounded-xl text-center">
        <div className="w-full aspect-square bg-zinc-600 rounded-2xl overflow-hidden">
          <img
            src={product.image}
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </div>

        <h3 className="title text-xl mt-6 truncate">{product.title}</h3>

        <div className="group flex gap-5">
          <div className="price bg-amber-400 p-2 rounded-md mt-3 w-full">
            {product.price}
          </div>

          <button
            className="price bg-red-400 p-2 rounded-md mt-3 w-full cursor-pointer"
            onClick={() => deleteProduct(product.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
