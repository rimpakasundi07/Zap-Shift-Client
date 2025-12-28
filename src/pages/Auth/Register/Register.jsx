import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";
import axios from "axios";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { registerUser, updateUserProfile } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  // console.log("in the register", location);

  const handleRegistration = (data) => {
    //   console.log("after register", data.photo[0]);
    const profileImg = data.photo[0];

    registerUser(data.email, data.password)
      .then(() => {
        //   result
        //    console.log(result.user);

        // 1. store the image in form data
        const formData = new FormData();
        formData.append("image", profileImg);
        // 2. send the photo to store and get the url
        const image_API_URL = `https://api.imgbb.com/1/upload?expiration=600&key=${
          import.meta.env.VITE_image_host_key
        }`;
        axios.post(image_API_URL, formData).then((res) => {
          // console.log("after image upload", res.data.data.url);
          const photoURL = res.data.data.url;

          // create user in the data base
          const userInfo = {
            email: data.email,
            displayName: data.name,
            photoURL: photoURL,
          };
          axiosSecure.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              console.log("user created in the database");
            }
          });

          // update user profile to firebase
          const userProfile = {
            displayName: data.name,
            photoURL: photoURL,
            // photoURL: res.data.data.url,
          };
          updateUserProfile(userProfile)
            .then(() => {
              console.log("user profile updated done");
              navigate(location.state || "/");
            })
            .catch((error) => console.log(error));
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="lg:py-10">
      <div className="lg:pl-4">
        <h2 className="font-bold  hover:text-yellow-300 text-teal-800 text-xl md:text-3xl lg:text-5xl ">
          Create an Account
        </h2>
        <p className="text-black py-2 lg:pl-2.5 font-semibold">
          Welcome & register with ZapShift
        </p>
      </div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 ">
        <form onSubmit={handleSubmit(handleRegistration)}>
          <div className="card bg-base-100 w-full max-w-sm shrink-0">
            <div className="card-body">
              <fieldset className="fieldset">
                {/* name */}
                <label className="label font-bold text-xl">Name</label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  className="input"
                  placeholder="Enter your name"
                />
                {errors.name?.type === "required" && (
                  <p className="text-red-600 font-semibold">
                    Name is required.
                  </p>
                )}
                {/* image  */}
                <label className="label font-bold text-xl  ">Image</label>

                <input
                  type="file"
                  {...register("photo", { required: true })}
                  className="file-input"
                  placeholder="Select a photo or URL"
                />
                {errors.name?.type === "required" && (
                  <p className="text-red-600 font-semibold">
                    Photo is required.
                  </p>
                )}
                {/* email  */}
                <label className="label font-bold text-xl ">Email</label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  className="input"
                  placeholder="Your email"
                />
                {errors.email?.type === "required" && (
                  <p className="text-red-600 font-semibold">
                    Email is required.
                  </p>
                )}
                {/* password */}
                <label className="label font-bold text-xl">Password</label>
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
              <p>
                Already have an account?
                <Link
                  state={location.state}
                  className="text-sky-400 underline font-bold hover:text-blue-800"
                  to="/login"
                >
                  Login
                </Link>{" "}
              </p>
            </div>
          </div>
        </form>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Register;
