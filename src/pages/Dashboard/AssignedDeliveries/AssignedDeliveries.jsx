import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AssignedDeliveries = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: parcels = [], refetch } = useQuery({
    queryKey: ["parcels", user.email, "driver_assigned"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/parcels/rider?riderEmail=${user.email}&deliveryStatus=driver_assigned`
      );
      return res.data;
    },
  });

  const handleAcceptDelivery = (parcel) => {
    const statusInfo = { deliveryStatus: "rider_arriving" };
    axiosSecure
      .patch(`/parcels/${parcel._id}/status`, statusInfo)
      .then((res) => {
        if (res.data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Thank you for accepting.`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div>
      <h2 className="lg:text-5xl text-center lg:py-6 text-xl text-teal-800 font-bold">
        Parcels pending pickup : {parcels.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Confirm</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {parcels.map((parcel, index) => (
              <tr key={parcel._id}>
                <th>{index + 1} </th>
                <td>{parcel.parcelName}</td>
                <td className="space-x-3">
                  <button
                    onClick={() => handleAcceptDelivery(parcel)}
                    className="btn btn-primary text-black"
                  >
                    Accept
                  </button>
                  <button className="btn btn-outline btn-error">Reject</button>
                </td>
                <td>Blue</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AssignedDeliveries;
