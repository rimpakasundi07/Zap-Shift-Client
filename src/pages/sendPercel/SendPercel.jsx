import React from "react";
import { useForm } from "react-hook-form";

const SendPercel = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSendPercel = (data) => {
    console.log(data);
  };

  return (
    <div className="w-11/12 mx-auto py-2 lg:py-8">
      <div className="">
        <h2 className="text-teal-800 font-bold text-xl lg:text-5xl">
          Send A Parcel
        </h2>
        <p className="font-bold text-lg py-2 lg:py-5 lg:text-xl">
          Enter your parcel details
        </p>
        <hr className="border-gray-300"></hr>
      </div>
      {/* form */}
      <div className="">
        <form
          onSubmit={handleSubmit(handleSendPercel)}
          className="mt-6 p-10 text-black"
        >
          {/* parcel type*/}
          <div className="">
            <label className="label mr-6 lg:mr-16">
              <input
                type="radio"
                {...register("parcelType")}
                value="document"
                defaultChecked
                className="radio bg-blue-100 border-blue-300 checked:bg-blue-200 checked:text-blue-600 checked:border-blue-600"
              />
              Document
            </label>
            <label className="label">
              <input
                type="radio"
                {...register("parcelType")}
                value="non-document"
                defaultChecked
                className="radio bg-red-100 border-red-300 checked:bg-red-200 checked:text-red-600 checked:border-red-600"
              />
              Non-Document
            </label>
          </div>
          {/* parcel info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-32 py-4 lg:py-6 ">
            <fieldset className="fieldset">
              <label className="label text-lg font-bold text-gray-600">
                Parcel Name
              </label>
              <input
                type="text"
                {...register("parcelName")}
                className="input w-full"
                placeholder="Enter Parcel Name"
              />
            </fieldset>
            <fieldset className="fieldset">
              <label className="label text-lg font-bold text-gray-600">
                Parcel Weight (kg)
              </label>
              <input
                type="text"
                {...register("parcelWeight")}
                className="input  w-full"
                placeholder="Parcel Weight"
              />
            </fieldset>
          </div>
          <hr className="border-gray-300"></hr>
          {/* two column */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-32 py-4 lg:py-6">
            {/* 1st div  || sender info  */}
            <div className="space-y-4 ">
              <fieldset className="fieldset">
                <h2 className="text-lg lg:text-2xl py-2 lg:py-6 font-semibold">
                  Sender Details
                </h2>
                <label className="label text-lg font-bold text-gray-600">
                  Sender Name
                </label>
                <input
                  type="text"
                  {...register("parcelName")}
                  className="input w-full"
                  placeholder="Enter  Sender Name"
                />

                <label className="label text-lg font-bold text-gray-600">
                  Address
                </label>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="Enter Sender Address"
                />
                <label className="label text-lg font-bold text-gray-600">
                  Sender Phone No
                </label>
                <input
                  type="number"
                  className="input w-full"
                  placeholder="Sender Phone No"
                />
                <label className="label text-lg font-bold text-gray-600">
                  Your District
                </label>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="Select  District"
                />
                <label className="label text-lg font-bold text-gray-600">
                  Pickup Instruction
                </label>
                <textarea
                  rows="5"
                  cols="40"
                  type="text"
                  className="input w-full"
                  placeholder="Pickup Instruction"
                />
              </fieldset>
            </div>

            {/* 2nd div  || receiver info */}
            <div className="space-y-4 ">
              <fieldset className="fieldset">
                <h2 className="text-lg lg:text-2xl py-2 lg:py-6 font-semibold">
                  Receiver Details
                </h2>
                <label className="label text-lg font-bold text-gray-600">
                  Receiver Name
                </label>
                <input
                  type="text"
                  {...register("parcelWeight")}
                  className="input  w-full"
                  placeholder="Enter Receiver Name"
                />
                <label className="label text-lg font-bold text-gray-600">
                  Receiver Address
                </label>
                <input
                  type="text"
                  className="input  w-full"
                  placeholder="Enter Receiver Address"
                />
                <label className="label text-lg font-bold text-gray-600">
                  Receiver Contact No
                </label>
                <input
                  type="number"
                  className="input  w-full"
                  placeholder="Enter Contact No"
                />
              </fieldset>
            </div>
          </div>
          {/* submit button */}
          <input
            type="submit"
            className="btn my-3 lg:my-6 bg-[#CAEB66] hover:bg-teal-800 cursor-pointer hover:text-white text-black"
            value="Send Parcel"
          />
        </form>
      </div>
    </div>
  );
};

export default SendPercel;
