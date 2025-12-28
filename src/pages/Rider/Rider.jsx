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

  const senderRegion = useWatch({ control, name: "senderRegion" });

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
                  {districtsByRegion(senderRegion).map((r, i) => (
                    <option key={i} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </fieldset>

              {/* address */}

              <label className="label text-lg font-bold text-gray-600">
                Your address
              </label>
              <input
                type="text"
                {...register("address")}
                className="input w-full"
                placeholder="Enter your address"
              />

              {/* details */}

              <fieldset className="fieldset">
                <h4 className="fieldset-legend label text-lg font-bold text-gray-600">
                  More details
                </h4>
                <label className="label">Driving License</label>
                <input
                  type="text"
                  {...register("license")}
                  className="input w-full"
                  placeholder="Driving License"
                />
              </fieldset>

              {/* phone */}
              <label className="label text-lg font-bold text-gray-600">
                Sender Phone No
              </label>
              <input
                type="number"
                {...register("senderPhoneNo")}
                className="input w-full"
                placeholder="Sender Phone No"
              />
            </fieldset>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Rider;
