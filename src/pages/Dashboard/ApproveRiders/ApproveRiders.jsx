import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ApproveRiders = () => {
  const axiosSecure = useAxiosSecure();
  const { data: rider = [] } = useQuery({
    queryKey: ["riders", "pending"],
    queryFn: async () => {
      const res = await axiosSecure.get("/riders");
      return res.data;
    },
  });
  return (
    <div>
      <h2 className="lg:text-5xl text-center lg:py-6 text-xl text-teal-800 font-bold">
        Riders pending approval : {rider.length}
      </h2>
    </div>
  );
};

export default ApproveRiders;
