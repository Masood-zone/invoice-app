import React from "react";
import { useForm } from "react-hook-form";

function Form({ Data, submitHandler, loading }) {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  return (
    <form
      className="flex flex-col w-full px-5"
      onSubmit={handleSubmit(submitHandler)}
    >
      {Data.map((data) =>
        data.type !== "password" ? (
          <div key={data.id} className="flex flex-col py-3">
            <label className="capitalize pb-3">{data.name}</label>
            <input
              {...register(`${data.name}`, {
                required: "This field is required",
              })}
              placeholder={data.placeholder}
              type={data.type}
              className="py-3 px-1 rounded-md border-2 border-gray-400"
            />
            {errors[data.name] && (
              <p className="text-red-400 ">{errors[data.name].message}</p>
            )}
          </div>
        ) : (
          <div key={data.id} className="flex flex-col py-3">
            {/* Password Section */}
            <label className="capitalize pb-3">{data.name}</label>
            <input
              className="py-3 px-1 rounded-md border-2 border-gray-400"
              {...register(data.name, {
                required: "This field is required",
                minLength:
                  data.name === "password"
                    ? {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      }
                    : undefined,
                validate:
                  data.name === "confirmPwd"
                    ? (value) =>
                        value === getValues("password") ||
                        "Passwords must match"
                    : undefined,
              })}
              placeholder={data.placeholder}
              type={data.type}
            />
            {errors[data.name] && (
              <p className="text-red-400 ">{errors[data.name].message}</p>
            )}
          </div>
        )
      )}

      <button
        type="submit"
        className="bg-violet-600 text-white py-3 rounded-md text-lg hover:bg-violet-800"
      >
        {loading ? <span className="loader"></span> : <span>Sign Up</span>}
      </button>
    </form>
  );
}

export default Form;
