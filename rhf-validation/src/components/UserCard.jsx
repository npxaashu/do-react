import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="bg-zinc-900 hover:bg-zinc-800 w-[24rem] rounded-md p-7 flex flex-col gap-2">
      <div className="image w-full aspect-square overflow-hidden bg-amber-400 rounded-xl">
        <img
          className="w-full h-full object-cover object-center"
          src={user.image}
          alt=""
        />
      </div>

      <h2 className="text-2xl">{user.name}</h2>

      <div className=" flex justify-between">
        <h3>{user.email}</h3>
        <h3>{user.mobile}</h3>
      </div>

      <div className="flex justify-between gap-7">
        <button className="cursor-pointer w-full bg-yellow-300 text-black px-4 py-2 rounded-md">
          Update
        </button>
        <button className="cursor-pointer w-full bg-red-400 px-4 py-2 rounded-md">
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserCard;
