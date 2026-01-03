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
      {/* table */}

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th className="text-center  text-xl font-bold">Name</th>
              <th className="text-center text-xl font-bold">Cost</th>
              <th className="text-center text-xl font-bold">Created At</th>
              <th className="text-center text-xl font-bold">Pickup District</th>
              <th className="text-center text-xl font-bold">Action</th>
            </tr>
          </thead>
          <tbody>
            {parcels.map((parcel, index) => (
              <tr key={parcel._id}>
                <th className="text-center"> {index + 1} </th>
                <td className="text-center text-blue-700 lg:text-2xl ">
                  {parcel.parcelName}
                </td>
                <td className="text-center text-green-600 font-semibold">
                  $ {parcel.cost}
                </td>
                <td className="text-center">{parcel.createdAt}</td>
                <td className="text-center font-bold">
                  {parcel.senderDistrict}
                </td>
                <td className="text-center">
                  <button className="lg:px-5 lg:py-3 p-2 rounded-lg hover:border-2 bg-[#caeb66]  hover:border-[#caeb66]  hover:text-[#caeb66] hover:bg-white font-bold lg:font-extrabold text-black lg:mr-6">
                    Assign Rider
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* modal */}
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        open modal
      </button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default AssignRiders;
