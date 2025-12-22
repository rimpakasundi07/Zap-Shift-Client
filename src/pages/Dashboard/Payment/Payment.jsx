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
      <p>Please pay :{parcel.parcelName}</p>
    </div>
  );
};

export default Payment;
