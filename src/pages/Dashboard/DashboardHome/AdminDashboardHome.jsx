import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AdminDashboardHome = () => {
  const axiosSecure = useAxiosSecure();
  const { data: deliveryStatus = [] } = useQuery({
    queryKey: ["delivery-status-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/parcels/delivery-status/stats");
      return res.data;
    },
  });

  return (
    <div>
      <h2 className="text-teal-800 text-center py-2 lg:py-10 font-bold lg:text-6xl text-xl">
        Admin Dashing
      </h2>
      {/* slat is here */}
      <div className="stats shadow">
        {deliveryStatus.map((stat) => (
          <div key={stat._id} className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <div className="p-5 ">
              <div className="stat-title text-xl font-bold lg:text-2xl">
                {stat._id}
              </div>
              <div className="stat-value text-xl lg:text-2xl text-center text-blue-600">
                {stat.count}
              </div>
              <div className="stat-desc  text-center">Jan 1st - Feb 1st</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboardHome;
