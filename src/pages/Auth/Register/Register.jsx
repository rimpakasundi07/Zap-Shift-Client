import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { registerUser } = useAuth();

  const handleRegistration = (data) => {
    console.log("after register", data);
    registerUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit(handleRegistration)}>
        <div className="card bg-base-100 w-full max-w-sm shrink-0">
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="label font-bold text-xl lg:text-3xl ">
                Email
              </label>
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
              <label className="label font-bold text-xl lg:text-3xl">
                Password
              </label>
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
                <p className="text-red-600 font-semibold">
                  Password is required.
                </p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-600 font-semibold">
                  Password must be 6 character or longer.
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-600">
                  Password must have at least one uppercase , at least one
                  lowercase , at least one number, and at least one speical
                  character
                </p>
              )}
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn hover:bg-blue-700 bg-teal-800 text-white mt-4">
                Register
              </button>
            </fieldset>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
