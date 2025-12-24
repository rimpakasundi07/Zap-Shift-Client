import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Payment = () => {
  const { parcelId } = useParams();
  const axiosSecure = useAxiosSecure();
  const { isLoading, data: parcel } = useQuery({
    queryKey: ["parcels", parcelId],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels/${parcelId}`);
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div>
        <span className="loading  lg:py-10 py-5 loading-bars loading-xl"></span>
      </div>
    );
  }

  return (
    <div>
      <p>
        Please ${parcel.cost} pay :{parcel.parcelName}
      </p>
      <button className="lg:px-5 lg:py-3 p-2 rounded-lg hover:border-2 bg-[#caeb66]  hover:border-[#caeb66]  hover:text-[#caeb66] hover:bg-white font-bold lg:font-extrabold text-black lg:mr-6 ">
        Pay
      </button>
    </div>
  );
};

export default Payment;
