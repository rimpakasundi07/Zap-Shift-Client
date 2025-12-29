import React from "react";
import { useForm, useWatch } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import rider from "../../assets/agent-pending.png";

const Rider = () => {
  const {
    register,
    handleSubmit,
    control,
    // formState: { errors },
  } = useForm();

  // console.log(errors);

  const { user } = useAuth();

  const axiosSecure = useAxiosSecure();

  const serviceCenter = useLoaderData();
  const regionsDuplicate = serviceCenter.map((c) => c.region);
  const regions = [...new Set(regionsDuplicate)];
  // explore useMemo useCallback
  const districtsByRegion = (region) => {
    const regionDistricts = serviceCenter.filter((c) => c.region === region);
    const districts = regionDistricts.map((d) => d.district);
    return districts;
  };

  const riderRegion = useWatch({ control, name: "region" });

  const handleRiderApplication = async (data) => {
    console.log("Form Data:", data); // ১. ডাটা চেক

    try {
      const res = await axiosSecure.post("/riders", data);
      console.log("Server Response:", res.data); // ২. রেসপন্স চেক

      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          title: "Your application has been submitted.",
          showConfirmButton: false,
          icon: "success",
          timer: 2000,
        });
      }
    } catch (error) {
      console.error("Submission Error:", error); // ৩. এরর চেক
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong! Check console.",
      });
    }
  };

  // const handleRiderApplication = (data) => {
  //   console.log(data);

  //   axiosSecure.post("/riders", data)
  //   .then((res) => {
  //     console.log("Server Response:", res.data);
  //     if (res.data.insertedId) {
  //       Swal.fire({
  //         position: "top-end",
  //         title:
  //           "Youe application has been submitted. We will reach to you in 7 days.",
  //         showConfirmButton: false,
  //         icon: "success",
  //         timer: 2000,
  //       });
  //     }
  //   });
  // };

  return (
    <div className="w-11/12 mx-auto ">
      {/* textt */}
      <div className="py-3 lg:py-4">
        <h2 className="text-teal-800 font-bold text-xl lg:text-4xl">
          Be a Rider
        </h2>
        <p className="text-gray-500 text-lg py-2 lg:w-[1000px] ">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
      </div>
      {/*  form  */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-32 py-4 ">
        {/* left side */}
        <div className="">
          <form onSubmit={handleSubmit(handleRiderApplication)}>
            <div className="space-y-4 ">
              <fieldset className="fieldset">
                <h2 className="text-lg lg:text-2xl text-teal-800 py-2 font-bold">
                  Tell us about yourself
                </h2>
                {/* NAME */}
                <label className="label text-lg font-bold text-gray-600">
                  Rider Name
                </label>
                <input
                  type="text"
                  {...register("name")}
                  defaultValue={user?.displayName}
                  className="input w-full"
                  placeholder="Enter your Name"
                />

                {/*Email  */}
                <label className="label text-lg font-bold text-gray-600">
                  Rider Email
                </label>
                <input
                  type="email"
                  {...register("email")}
                  defaultValue={user?.email}
                  className="input w-full"
                  placeholder=" Enter Rider Email"
                />
                {/* rider region */}

                <fieldset className="fieldset">
                  <legend className="fieldset-legend label text-lg font-bold text-gray-600">
                    Rider Regions
                  </legend>
                  <select
                    {...register("region")}
                    defaultValue=""
                    className="select"
                  >
                    <option value="" disabled>
                      Pick a region
                    </option>
                    {regions.map((r, i) => (
                      <option key={i} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </fieldset>

                {/* district */}

                <fieldset className="fieldset">
                  <legend className="fieldset-legend label text-lg font-bold text-gray-600">
                    District
                  </legend>

                  <select
                    {...register("district")}
                    defaultValue=""
                    className="select"
                  >
                    <option value="" disabled>
                      Pick a district
                    </option>

                    {riderRegion &&
                      districtsByRegion(riderRegion).map((r, i) => (
                        <option key={i} value={r}>
                          {r}
                        </option>
                      ))}
                  </select>
                </fieldset>

                <fieldset className="fieldset">
                  {/* Driving License Number */}
                  <label className="label text-lg font-bold text-gray-600">
                    Driving License Number
                  </label>
                  <input
                    type="text"
                    {...register("License")}
                    className="input w-full"
                    placeholder="Driving License Number"
                  />

                  {/* NID */}
                  <label className="label text-lg font-bold text-gray-600">
                    NID
                  </label>
                  <input
                    type="text"
                    {...register("NID")}
                    className="input w-full"
                    placeholder="NID"
                  />

                  {/* phone */}
                  <label className="label text-lg font-bold text-gray-600">
                    Phone No
                  </label>
                  <input
                    type="tel"
                    {...register("phoneNo")}
                    className="input w-full"
                    placeholder="Enter Phone No"
                  />

                  {/*  Bike Brand Model and Year  */}
                  <label className="label text-lg font-bold text-gray-600">
                    Bike Brand Model and Year
                  </label>
                  <input
                    type="text"
                    {...register("bikeBrand")}
                    className="input w-full"
                    placeholder="Bike Brand Model and Year"
                  />

                  {/* Tell Us About Yourself  */}
                  <label className="label text-lg font-bold text-gray-600">
                    Tell Us About Yourself
                  </label>
                  <textarea
                    {...register("about")}
                    className="textarea w-full lg:h-[100px]"
                    placeholder="Tell Us About Yourself"
                  />
                </fieldset>
              </fieldset>
            </div>
            <input
              type="submit"
              className="btn my-3 lg:my-6 w-full bg-[#CAEB66] hover:bg-teal-800 cursor-pointer hover:text-white text-black"
              value="Apply as a rider"
            />
          </form>
        </div>
        {/* /right side */}
        <div className="">
          <img src={rider} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Rider;
