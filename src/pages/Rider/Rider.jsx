import React from "react";
import { useForm, useWatch } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { useLoaderData } from "react-router";

const Rider = () => {
  const {
    register,
    handleSubmit,
    control,
    // formState: { errors },
  } = useForm();

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

  const handleRiderApplication = (data) => {
    console.log(data);
  };

  return (
    <div className="w-11/12 mx-auto ">
      {/* textt */}
      <div className="py-3 lg:py-8">
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-32 py-4 lg:py-6">
        {/* left side */}
        <div className="">
          <form onSubmit={handleSubmit(handleRiderApplication)}>
            <div className="space-y-4 ">
              <fieldset className="fieldset">
                <h2 className="text-lg lg:text-2xl text-teal-800 py-2 lg:py-6 font-bold">
                  Tell us about yourself
                </h2>
                {/* NAME */}
                <label className="label text-lg font-bold text-gray-600">
                  Your Name
                </label>
                <input
                  type="text"
                  {...register("senderName")}
                  defaultValue={user?.displayName}
                  className="input w-full"
                  placeholder="Enter your Name"
                />

                {/*Email  */}
                <label className="label text-lg font-bold text-gray-600">
                  Sender Email
                </label>
                <input
                  type="email"
                  {...register("senderEmail")}
                  defaultValue={user?.email}
                  className="input w-full"
                  placeholder="Sender Email"
                />
                {/* sender region */}

                <fieldset className="fieldset">
                  <legend className="fieldset-legend label text-lg font-bold text-gray-600">
                    Rider Regions
                  </legend>
                  <select
                    {...register("region")}
                    defaultValue="Pick a region"
                    class="select"
                  >
                    <option disabled selected>
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
                    defaultValue="Pick a district"
                    class="select"
                  >
                    <option disabled selected>
                      Pick a district
                    </option>
                    {districtsByRegion(riderRegion).map((r, i) => (
                      <option key={i} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </fieldset>

                {/* bike */}

                <label className="label text-lg font-bold text-gray-600">
                  Bike
                </label>
                <input
                  type="text"
                  {...register("bike")}
                  className="input w-full"
                  placeholder="Bike address"
                />

                {/* details & liencense */}

                <fieldset className="fieldset">
                  <h4 className="fieldset-legend label text-lg font-bold text-gray-600">
                    More details
                  </h4>

                  <input
                    type="text"
                    {...register("license")}
                    className="input w-full"
                    placeholder="Driving License"
                  />
                </fieldset>

                <fieldset className="fieldset">
                  {/* Driving License Number */}
                  <label className="label text-lg font-bold text-gray-600">
                    Driving License Number
                  </label>
                  <input
                    type="text"
                    className="input w-full"
                    placeholder="Driving License Number"
                  />

                  {/* NID */}
                  <label className="label text-lg font-bold text-gray-600">
                    NID
                  </label>
                  <input
                    type="text"
                    {...register("receiverName")}
                    className="input w-full"
                    placeholder="NID"
                  />

                  {/* phone */}
                  <label className="label text-lg font-bold text-gray-600">
                    Phone No
                  </label>
                  <input
                    type="number"
                    {...register("phoneNo")}
                    className="input w-full"
                    placeholder="Enter Phone No"
                  />

                  {/*  */}
                  <label className="label text-lg font-bold text-gray-600">
                    Bike Brand Model and Year
                  </label>
                  <input
                    type="email"
                    {...register("receiverEmail")}
                    className="input w-full"
                    placeholder="Bike Brand Model and Year"
                  />

                  {/* Tell Us About Yourself  */}
                  <label className="label text-lg font-bold text-gray-600">
                    Tell Us About Yourself
                  </label>
                  <textarea
                    type="email"
                    className="input w-full lg:h-[100px] "
                    placeholder="Tell Us About Yourself"
                  ></textarea>
                </fieldset>
              </fieldset>
            </div>
          </form>
        </div>
        {/* /right side */}
        <div className="">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Rider;
