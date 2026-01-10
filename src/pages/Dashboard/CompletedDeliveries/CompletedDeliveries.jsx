import React from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const CompletedDeliveries = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: parcels = [], refetch } = useQuery({
    queryKey: ["parcels", user.email, "driver_assigned"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/parcels/rider?riderEmail=${user.email}&deliveryStatus=parcel_delivered`
      );

      return res.data;
    },
  });

  return (
    <div>
      <h2 className="lg:text-5xl text-center lg:py-6 text-xl text-teal-800 font-bold">
        Completed Deliveries : {parcels.length}
      </h2>
    </div>
  );
};

export default CompletedDeliveries;
