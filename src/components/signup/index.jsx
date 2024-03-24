import React from "react";
import { useForm } from "react-hook-form";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-96">
        {/* Either you add labels to style, or you head on to the logic */}
        <label>Name</label>
        <input
          type="text"
          {...register("name", { required: true })}
          placeholder="enter your name"
          className={`${
            errors.name ? "border-2 border-red-500" : "border-gray-400 border-2"
          }`}
        />
        {errors.name && <p className="text-red-400">This field is required!</p>}
        <label>Email</label>
        <input
          type="text"
          {...register("email", { required: true })}
          placeholder="enter your Email"
          className="border-2 border-gray-500"
        />
        <label>Password</label>
        <input
          type="password"
          {...register("password")}
          placeholder="enter your password"
          className="border-2 border-gray-500"
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
