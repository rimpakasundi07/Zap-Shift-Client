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

      {/* table format */}

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th className="text-center  text-xl font-bold">Name</th>
              <th className="text-center  text-xl font-bold">Cost</th>
              <th className="text-center  text-xl font-bold">Created At</th>
              <th className="text-center  text-xl font-bold">
                Pickup District
              </th>
              <th className="text-center  text-xl font-bold">Action</th>
            </tr>
          </thead>
          <tbody>
            {parcels.map((parcel, index) => (
              <tr key={parcel._id}>
                <th>{index + 1}</th>
                <td className="text-center">{parcel.parcelName}</td>
                <td className="text-center">{parcel.cost}</td>
                <td className="text-center">{parcel.createdAt}</td>
                <td className="text-center">{parcel.senderDistrict}</td>
                <td className="text-center">
                  <button className="btn btn-primary text-black">
                    Find Riders
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompletedDeliveries;
