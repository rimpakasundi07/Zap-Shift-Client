import React from "react";

import Logo from "../../../components/Logo/Logo";
import { Link, NavLink } from "react-router";
import useAuth from "../../../hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error);
      });
  };

  const links = (
    <>
      <li>
        <NavLink to="/service">Services</NavLink>
      </li>
      <li>
        <NavLink to="/coverage">Coverage Areas </NavLink>
      </li>
      <li>
        <NavLink to="/send-percel">Send Parcel</NavLink>
      </li>
      <li>
        <NavLink to="/rider">Be a rider</NavLink>
      </li>

      {user && (
        <>
          <li>
            <NavLink to="/dashboard/my-parcels">My Parcels</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
        </>
      )}
      <li>
        <NavLink to="/about">About Us</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="lg:text-3xl flex lg:ml-6 items-center font-bold text-xl">
            <Logo></Logo>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <button
              onClick={handleLogOut}
              className="lg:px-5 lg:py-3 p-2 rounded-lg hover:bg-[#caeb66]  hover:text-white  text-[#caeb66] border-2  border-[#caeb66] font-bold lg:font-extrabold mr-2"
            >
              Logout
            </button>
          ) : (
            <Link
              className="lg:px-5 lg:py-3 p-2 rounded-lg hover:border-2 bg-[#caeb66]  hover:border-[#caeb66]  hover:text-[#caeb66] hover:bg-white font-bold lg:font-extrabold text-white lg:mr-6"
              to="/login"
            >
              Login
            </Link>
          )}
          <Link
            to="/rider"
            className="lg:px-5 lg:py-3 p-2 rounded-lg hover:border-2 bg-[#caeb66]  hover:border-[#caeb66]  hover:text-[#caeb66] hover:bg-white font-bold lg:font-extrabold text-black lg:mr-6"
          >
            Be a rider
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
