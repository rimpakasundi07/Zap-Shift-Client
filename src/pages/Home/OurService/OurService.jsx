import React from "react";
import icon from "../../../assets/bookingIcon.png";
import icon2 from "../../../assets/service.png";
import icon3 from "../../../assets/live-tracking.png";
import icon4 from "../../../assets/safe-delivery.png";
import icon5 from "../../../assets/location-merchant.png";
import imageLayer from "../../../assets/be-a-merchant-bg.png";
import Brands from "../Brands/Brands";

const OurService = () => {
  return (
    <div className="">
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
                From personal packages to business shipments — we deliver on
                time, every time.
              </p>
            </div>
            <div className="shadow-2xl hover:bg-yellow-300  hover:border-2 hover:border-dashed border-green-950   rounded-xl lg:px-5 lg:py-3  px-3 py-2">
              <img src={icon} className="mx-auto" alt="" />
              <h2 className="font-bold py-2 lg:py-4 text-center text-teal-800 lg:text-2xl text-xl ">
                Cash On Delivery
              </h2>
              <p className="text-gray-700 text-center">
                From personal packages to business shipments — we deliver on
                time, every time.
              </p>
            </div>
            <div className="shadow-2xl hover:bg-yellow-300  hover:border-2 hover:border-dashed border-green-950   rounded-xl lg:px-5 lg:py-3  px-3 py-2">
              <img src={icon} className="mx-auto" alt="" />
              <h2 className="font-bold py-2 lg:py-4 text-center text-teal-800 lg:text-2xl text-xl ">
                Delivery Hub
              </h2>
              <p className="text-gray-700 text-center">
                From personal packages to business shipments — we deliver on
                time, every time.
              </p>
            </div>
            <div className="shadow-2xl hover:bg-yellow-300  hover:border-2 hover:border-dashed border-green-950   rounded-xl lg:px-5 lg:py-3  px-3 py-2">
              <img src={icon} className="mx-auto" alt="" />
              <h2 className="font-bold py-2 lg:py-4 text-center text-teal-800 lg:text-2xl text-xl ">
                Booking SME & Corporate
              </h2>
              <p className="text-gray-700 text-center">
                From personal packages to business shipments — we deliver on
                time, every time.
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
            <div className="bg-white  h-[250px] lg:h-[360px] mx-auto  hover:bg-yellow-300 rounded-2xl p-5 ">
              <img src={icon2} className="mx-auto" alt="" />
              <h2 className="font-bold py-2 lg:py-4 text-center text-teal-800 lg:text-3xl text-xl ">
                Express & Standard Delivery
              </h2>
              <p className="text-gray-700 text-center">
                We deliver parcels within 24-72 hours across major Indian cities
                including Kolkata, Delhi, Mumbai, Chennai, Bengaluru, and
                Hyderabad. Express delivery is available in selected metro
                areas, ensuring 4-6 hour delivery from pick-up to drop-off.
              </p>
            </div>
            <div className="bg-white  h-[250px] lg:h-[360px] mx-auto  hover:bg-yellow-300 rounded-2xl p-5 ">
              <img src={icon2} className="mx-auto" alt="" />
              <h2 className="font-bold py-2 lg:py-4 text-center text-teal-800 lg:text-3xl text-xl ">
                Nationwide Delivery
              </h2>
              <p className="text-gray-700 text-center">
                We deliver parcels nationwide with home delivery in every
                district, ensuring your products reach customers within 48-72
                hours.
              </p>
            </div>
            <div className="bg-white  h-[250px] lg:h-[360px] mx-auto  hover:bg-yellow-300 rounded-2xl  p-5 ">
              <img src={icon2} className="mx-auto" alt="" />
              <h2 className="font-bold py-2 lg:py-4 text-center text-teal-800 lg:text-3xl text-xl ">
                Fulfillment Solution
              </h2>
              <p className="text-gray-700 text-center">
                We also offer customized service with inventory management
                support, online order processing, packaging, and after sales
                support.
              </p>
            </div>
            <div className="bg-white  h-[250px] lg:h-[360px] mx-auto  hover:bg-yellow-300 rounded-2xl  p-5 ">
              <img src={icon2} className="mx-auto" alt="" />
              <h2 className="font-bold py-2 lg:py-4 text-center text-teal-800 lg:text-3xl text-xl ">
                Cash on Home Delivery
              </h2>
              <p className="text-gray-700 text-center">
                100% cash on delivery anywhere in India with guaranteed safety
                of your product.
              </p>
            </div>
            <div className="bg-white  h-[250px] lg:h-[360px] mx-auto  hover:bg-yellow-300 rounded-2xl  p-5 ">
              <img src={icon2} className="mx-auto" alt="" />
              <h2 className="font-bold py-2 lg:py-4 text-center text-teal-800 lg:text-3xl text-xl ">
                Corporate Service / Contract In Logistics
              </h2>
              <p className="text-gray-700 text-center">
                Customized corporate services which includes warehouse and
                inventory management support.
              </p>
            </div>
            <div className="bg-white h-[250px] lg:h-[360px] mx-auto   hover:bg-yellow-300 rounded-2xl p-5 ">
              <img src={icon2} className="mx-auto" alt="" />
              <h2 className="font-bold py-2 lg:py-4 text-center text-teal-800 lg:text-3xl text-xl">
                Parcel Return
              </h2>
              <p className="text-gray-700 text-center">
                Through our reverse logistics facility we allow end customers to
                return or exchange their products with online business
                merchants.
              </p>
            </div>
          </div>
        </div>
        <Brands></Brands>
        {/* Our Support */}
        <div className="py-2 lg:py-6">
          <h2 className="lg:text-4xl text-xl text-teal-800 text-center font-bold">
            Our Support
          </h2>

          <section className="max-w-5xl mx-auto px-6 space-y-5  py-12">
            {/* dotted separators top */}
            <div className="w-full border-t-2 border-dashed border-gray-500 pb-4 mb-8"></div>
            {/* cards */}

            <div className="bg-white gap-3 lg:gap-8 py-3 lg:py-5 flex items-center lg:flex-row flex-col rounded-2xl shadow-2xl">
              <img src={icon4} className="p-2 lg:p-4" alt="" />

              <div className="py-3  lg:border-l-2 border-dashed border-teal-700 pl-4 lg:py-5">
                <p className="font-bold text-teal-800 lg:text-3xl text-xl">
                  100% Safe Delivery
                </p>
                <p className="py-2 lg:py-3">
                  We ensure your parcels are handled with the utmost care and
                  delivered securely to their destination. Our reliable process
                  guarantees safe and damage-free delivery every time.
                </p>
              </div>
            </div>
            <div className="bg-white gap-3 lg:gap-8 py-3 lg:py-5 flex items-center  lg:flex-row flex-col rounded-2xl shadow-2xl">
              <img src={icon3} className="p-2 lg:p-4" alt="" />
              {/* <p className="border-t-2 border-dashed border-gray-300"></p> */}

              <div className="py-3 lg:border-l-2 border-dashed border-teal-700 pl-4  lg:py-5">
                <p className="font-bold text-teal-800 lg:text-3xl text-xl">
                  Live Parcel Tracking
                </p>
                <p className="py-2 lg:py-3">
                  Stay updated in real-time with our live parcel tracking
                  feature. From pick-up to delivery, monitor your shipment's
                  journey and get instant status updates for complete peace of
                  mind.
                </p>
              </div>
            </div>
            <div className="bg-white gap-3 lg:gap-8 py-3 lg:py-5 flex items-center  lg:flex-row flex-col rounded-2xl shadow-2xl">
              <img src={icon4} className="p-2 lg:p-4" alt="" />
              {/* <p className="border-t-2 border-dashed border-gray-300"></p> */}

              <div className="py-3 lg:border-l-2 border-dashed border-teal-700 pl-4  lg:py-5">
                <p className="font-bold text-teal-800 lg:text-3xl text-xl">
                  24/7 Call Center Support
                </p>
                <p className="py-2 lg:py-3">
                  Our dedicated support team is available around the clock to
                  assist you with any questions, updates, or delivery
                  concerns—anytime you need us.
                </p>
              </div>
            </div>

            <div className="space-y-6"></div>

            {/* dotted separators bottom */}
            <div className="w-full border-t-2 border-dashed border-gray-500 mt-8"></div>
          </section>
        </div>
      </div>
      {/* Merchant and Customer Satisfaction is Our First Priority  */}
      <div className="bg-teal-800 rounded-2xl lg:p-10 p-5 relative mx-auto my-10 w-10/12 ">
        <img
          src={imageLayer}
          className="lg:block hidden absolute top-0 left-[10%]"
          alt=""
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* 1st layer */}
          <div className="">
            <h2 className="text-white text-xl lg:text-3xl lg:py-5 py-2 font-bold">
              Merchant and Customer Satisfaction is Our First Priority
            </h2>
            <p className="text-white py-2 lg:py-3 text-lg lg:text-xl">
              We offer the lowest delivery charge with the highest value along
              with 100% safety of your product. Pathao courier delivers your
              parcels in every corner of Bangladesh right on time.
            </p>
            <div className="flex items-center py-3 lg:py-5 ">
              <button className="lg:px-5 lg:py-3 p-2 rounded-full hover:border-2 bg-[#caeb66]  hover:border-[#caeb66]  hover:text-[#caeb66] hover:bg-teal-800 font-bold lg:font-extrabold text-black lg:mr-6">
                Become a Merchant
              </button>
              <button className="lg:px-5 lg:py-3 p-2 rounded-full hover:bg-[#caeb66]  hover:text-white  text-[#caeb66] border-2  border-[#caeb66] font-bold lg:font-extrabold mr-2">
                Earn with ZapShift Courier
              </button>
            </div>
          </div>
          {/* 2nd layer */}
          <div className="">
            <img src={icon5} className="mx-auto" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurService;
