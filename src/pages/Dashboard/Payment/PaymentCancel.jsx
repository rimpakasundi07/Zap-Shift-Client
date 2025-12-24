import React from "react";
import { Link } from "react-router";

const PaymentCancel = () => {
  return (
    <div>
      <div className="">
        <h2 className="lg:text-4xl text-center py-4 lg:pt-20 font-bold text-red-600 text-xl">
          Payment is Cancelled !!!
        </h2>
        <p className="text-xl text-center py-4 lg:pt-8 font-bold">
          Please try again.
        </p>
      </div>
      <div className="flex items-center justify-center py-2 lg:py-5">
        <Link to="/dashboard/my-parcels">
          <button className=" mx-auto lg:px-5 lg:py-3 p-2 rounded-lg hover:border-2 bg-[#caeb66]  hover:border-[#caeb66]  hover:text-[#caeb66] hover:bg-white font-bold lg:font-extrabold text-black lg:mr-6">
            Try again !
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PaymentCancel;
