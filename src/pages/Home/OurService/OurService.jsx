import React from "react";
import icon from "../../../assets/bookingIcon.png";
import icon2 from "../../../assets/service.png";

const OurService = () => {
  return (
    <div>
      {/* How it Works */}
      <div className="py-4 lg:py-12">
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
      {/* Our Services */}
      <div className="bg-teal-800 rounded-2xl lg:m-14 lg:py-8 p-6 m-6">
        <div className="">
          <h2 className="text-white hover:text-yellow-400 font-bold text-xl lg:text-4xl text-center ">
            Our Services
          </h2>
          <p className="text-white text-center py-3 lg:py-7 w-8/12 mx-auto">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>
        </div>
        {/* card's parent are here */}
        <div className="w-11/12 mx-auto gap-5 grid grid-cols-1 lg:grid-cols-3 py-5 lg:py-12 md:grid-cols-2">
          {/* card are here */}
          <div className="bg-white hover:bg-yellow-300 rounded-2xl p-5 ">
            <img src={icon2} className="mx-auto" alt="" />
            <h2 className="font-bold py-2 lg:py-4 text-center text-teal-800 lg:text-3xl text-xl ">
              Express & Standard Delivery
            </h2>
            <p className="text-gray-700 text-center">
              “We deliver parcels within 24=-72 hours across major Indian cities
              including Kolkata, Delhi, Mumbai, Chennai, Bengaluru, and
              Hyderabad. Express delivery is available in selected metro areas,
              ensuring 4-6 hour delivery from pick-up to drop-off.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurService;
