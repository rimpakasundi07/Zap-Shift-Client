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
      </div>
      {/* form */}
      <div className="">
        <form onSubmit={handleSubmit(handleSendPercel)} className="mt-12 p-10">
          {/* parcel type*/}
          <div className="">
            <label className="label mr-4">
              <input
                type="radio"
                {...register("parcelType")}
                value="document"
                defaultChecked
                className="radio bg-blue-100 border-blue-300 checked:bg-blue-200 checked:text-blue-600 checked:border-blue-600 "
              />
              Document
            </label>
            <label className="label">
              <input
                type="radio"
                {...register("parcelType")}
                value="non-document"
                defaultChecked
                className="radio bg-red-100 border-red-300 checked:bg-red-200 checked:text-red-600 checked:border-red-600
                 "
              />
              Non-Document
            </label>
          </div>
          {/* parcel info */}
          <div className=""></div>
          {/* two column */}
          <div className="">
            {/* 1st div  || sender info  */}
            <div className=""></div>
            {/* 2nd div  || receiver info */}
            <div className=""></div>
          </div>
          <input
            type="submit"
            className="btn bg-[#CAEB66] hover:bg-teal-800 cursor-pointer hover:text-white text-black"
            value="Send Parcel"
          />
        </form>
      </div>
    </div>
  );
};

export default SendPercel;
