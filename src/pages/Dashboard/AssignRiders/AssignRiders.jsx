import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AssignRiders = () => {
  const axiosSecure = useAxiosSecure();
  const { data: parcels = [] } = useQuery({
    queryKey: ["parcels", "pending-pickup"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        "/parcels?deliveryStatus=pending-pickup"
      );
      return res.data;
    },
  });
  return (
    <div>
      <p className="lg:text-5xl text-center lg:py-6 text-xl text-teal-800 font-bold">
        Assign Riders: {parcels.length}
      </p>
    </div>
  );
};

export default AssignRiders;
