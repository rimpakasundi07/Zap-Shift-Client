import React from "react";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegistration = (data) => {
    console.log("after register", data);
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit(handleRegistration)}>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input"
            placeholder="Email"
          />
          {errors.email?.type === "required" && (
            <p className="text-red-600 font-semibold">Email is required.</p>
          )}
          {/* password */}
          <label className="label">Password</label>
          <input
            type="password"
            {...register("password", {
              required: true,
              minLength: 6,
              pattern:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
            })}
            className="input"
            placeholder="Password"
          />
          {errors.password?.type === "required" && (
            <p className="text-red-600 font-semibold">Password is required.</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-600 font-semibold">
              Password must be 6 character or longer.
            </p>
          )}
          {errors.password?.type === "pattern" && (
            <p className="text-red-600">
              Password must have at least one uppercase , at least one lowercase
              , at least one number, and at least one speical character
            </p>
          )}
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
      </form>
    </div>
  );
};

export default Register;
