import React from "react";
import icon from "../../../assets/bookingIcon.png";

const OurService = () => {
  return (
    <div>
      <div className="">
        <h2 className="lg:text-4xl text-xl text-teal-800 text-center font-bold">
          How it Works
        </h2>
        <div className="w-11/12 mx-auto gap-5 grid grid-cols-1 lg:grid-cols-4 py-5 lg:py-12 md:grid-cols-2">
          <div className="shadow-2xl hover:bg-yellow-300 hover:border-2 hover:border-dashed border-green-950 rounded-xl lg:px-5 lg:py-3 px-3 py-2">
            <img src={icon} className="mx-auto" alt="" />
            <h2 className="font-bold py-2 lg:py-4 text-center text-teal-800 lg:text-2xl text-xl ">
              Booking Pick & Drop
            </h2>
            <p className="text-gray-700 text-center">
              From personal packages to business shipments — we deliver on time,
              every time.
            </p>
          </div>
          <div className="shadow-2xl hover:bg-yellow-300  hover:border-2 hover:border-dashed border-green-950   rounded-xl lg:px-5 lg:py-3  px-3 py-2">
            <img src={icon} className="mx-auto" alt="" />
            <h2 className="font-bold py-2 lg:py-4 text-center text-teal-800 lg:text-2xl text-xl ">
              Cash On Delivery
            </h2>
            <p className="text-gray-700 text-center">
              From personal packages to business shipments — we deliver on time,
              every time.
            </p>
          </div>
          <div className="shadow-2xl hover:bg-yellow-300  hover:border-2 hover:border-dashed border-green-950   rounded-xl lg:px-5 lg:py-3  px-3 py-2">
            <img src={icon} className="mx-auto" alt="" />
            <h2 className="font-bold py-2 lg:py-4 text-center text-teal-800 lg:text-2xl text-xl ">
              Delivery Hub
            </h2>
            <p className="text-gray-700 text-center">
              From personal packages to business shipments — we deliver on time,
              every time.
            </p>
          </div>
          <div className="shadow-2xl hover:bg-yellow-300  hover:border-2 hover:border-dashed border-green-950   rounded-xl lg:px-5 lg:py-3  px-3 py-2">
            <img src={icon} className="mx-auto" alt="" />
            <h2 className="font-bold py-2 lg:py-4 text-center text-teal-800 lg:text-2xl text-xl ">
              Booking SME & Corporate
            </h2>
            <p className="text-gray-700 text-center">
              From personal packages to business shipments — we deliver on time,
              every time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurService;
