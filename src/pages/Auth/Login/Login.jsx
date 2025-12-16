import React from "react";

const Login = () => {
  return (
    <div className="w-11/12 mx-auto py-3 lg:py-6">
      <h2 className="font-bold text-teal-800 text-xl md:text-3xl lg:text-6xl ">
        Welcome Back
      </h2>
      <p className="text-black py-2 font-semibold">Login with ZapShift</p>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 ">
        <div className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Login;
