import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signInUser } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  // console.log("in the login page", location);

  const handleLogin = (data) => {
    console.log("form data", data);
    signInUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        navigate(location?.state || "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="w-11/12 mx-auto py-3 lg:py-6">
      <div className="lg:pl-4">
        <h2 className="font-bold hover:text-yellow-300 text-teal-800 text-xl md:text-3xl lg:text-5xl ">
          Welcome Back
        </h2>
        <p className="text-black py-2 lg:pl-2.5 font-semibold">
          Login with ZapShift
        </p>
      </div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 ">
        <form onSubmit={handleSubmit(handleLogin)} className="card-body">
          <fieldset className="fieldset">
            {/* email */}
            <label className="label font-bold text-xl">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="input"
              placeholder="Email"
            />

            {errors.email?.type === "required" && (
              <p className="text-red-600 font-semibold">Email is required</p>
            )}

            {/* password */}
            <label className="label font-bold text-xl ">Password</label>
            <input
              type="password"
              {...register("password", { required: true, minLength: 6 })}
              className="input"
              placeholder="Password"
            />

            {errors.password?.type === "minlength" && (
              <p className="text-red-700 font-semibold">
                Password must be 6 character or longer
              </p>
            )}

            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn hover:bg-blue-700  bg-teal-800 text-white mt-4">
              Login
            </button>
          </fieldset>
          <p>
            New to Zap Shift{" "}
            <Link
              state={location.state}
              className="text-sky-400 underline font-bold hover:text-blue-800"
              to="/register"
            >
              Register
            </Link>{" "}
          </p>
        </form>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Login;
