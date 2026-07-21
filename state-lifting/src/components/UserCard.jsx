import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="card bg-zinc-400 w-[20rem] flex flex-col gap-5 items-center px-4 py-7 rounded-2xl text-xl">
      <h2 className="text-3xl">{user.name}</h2>
      <h3 className="">{user.email}</h3>
      <p className="bg-yellow-400 p-2 text-white w-max">{user.id}</p>
    </div>
  );
};

export default UserCard;
