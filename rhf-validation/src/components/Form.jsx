import { nanoid } from "nanoid";
import React from "react";
import { useForm } from "react-hook-form";

const Form = ({ setToggle, setUsers }) => {
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onChange'
  });

  function submitForm(data) {
    let newUser = { ...data, id: nanoid(10) };
    setUsers((prev) => [...prev, newUser]);
    reset();
    setToggle((prev) => !prev);
  }

  return (
    <>
      <div className="w-120 flex justify-between py-10">
        <h3 className="text-3xl font-semibold">Create User</h3>
        <button
          onClick={() => setToggle((prev) => !prev)}
          className="underline cursor-pointer"
        >
          Close
        </button>
      </div>

      <form
        onSubmit={handleSubmit(submitForm)}
        className="flex flex-col gap-5 bg-zinc-800 w-120 px-8 py-10"
      >
        <div className="w-full flex flex-col gap-1">
          <input
            {...register("name", {
              required: "Name is required",
            })}
            type="text"
            placeholder="Name"
            className="bg-zinc-950 px-4 py-2 rounded-md outline-none"
          />

          {errors.name && (
            <span className="text-red-500 text-sm ml-3">
              {errors.name?.message}
            </span>
          )}
        </div>
        <div className="w-full flex flex-col gap-1">
          <input
            {...register("email", {
              required: "Email is required",
            })}
            type="email"
            placeholder="Email"
            className="bg-zinc-950 px-4 py-2 rounded-md outline-none"
          />
          {errors.email && (
            <span className="text-red-500 text-sm ml-3">
              {errors.email?.message}
            </span>
          )}
        </div>
        <div className="w-full flex flex-col gap-1">
          <input
            {...register("mobile", {
              required: "Mobile number is required",
              minLength: {
                value: 10,
                message: "Minimum 10 dizits are required",
              },
              maxLength: {
                value: 10,
                message: "Maximum 10 dizits are required",
              },
            })}
            type="number"
            placeholder="Mobile"
            className="bg-zinc-950 px-4 py-2 rounded-md outline-none"
          />
          {errors.mobile && (
            <span className="text-red-500 text-sm ml-3">
              {errors.mobile?.message}
            </span>
          )}
        </div>
        <div className="w-full flex flex-col gap-1">
          <input
            {...register("image", { required: "Image is required" })}
            type="url"
            placeholder="Image"
            className="bg-zinc-950 px-4 py-2 rounded-md outline-none"
          />
          {errors.image && (
            <span className="text-red-500 text-sm ml-3">
              {errors.image?.message}
            </span>
          )}
        </div>

        <button className="bg-yellow-300 text-black font-semibold uppercase cursor-pointer px-4 py-2 rounded-md outline-none">
          Add User
        </button>
      </form>
    </>
  );
};

export default Form;
