import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";

const MyParcels = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: parcels = [] } = useQuery({
    queryKey: ["myParcels", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels?email=${user.email}`);
      return res.data;
    },
  });
  return (
    <div>
      <h2 className="text-teal-800 py-2 lg:p-6 font-bold lg:text-4xl text-xl">
        All of my parcels : {parcels.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th className="text-green-700  text-center"></th>
              <th className="text-green-700  text-center">Name</th>
              <th className="text-green-700  text-center">Cost</th>
              <th className="text-green-700  text-center">Payment Status</th>
              <th className="text-green-700 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {parcels.map((parcel, index) => (
              <tr key={parcel._id}>
                <th>{index + 1}</th>
                <td className=" text-center">{parcel.parcelName}</td>
                <td className=" text-center">{parcel.cost}</td>
                <td className=" text-center">Blue</td>
                <td className="mx-2 space-x-5  text-center">
                  <button className="btn btn-square hover:bg-primary">
                    <FaRegEdit />
                  </button>
                  <button className="btn btn-square hover:bg-primary">
                    <FaMagnifyingGlass />
                  </button>
                  <button className="btn btn-square hover:bg-primary">
                    <FaTrashAlt />
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

export default MyParcels;
