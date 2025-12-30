import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { IoPersonRemove } from "react-icons/io5";
import { FaUserCheck } from "react-icons/fa6";
import { IoTrash } from "react-icons/io5";
import Swal from "sweetalert2";

const ApproveRiders = () => {
  const axiosSecure = useAxiosSecure();
  const { data: riders = [] } = useQuery({
    queryKey: ["riders", "pending"],
    queryFn: async () => {
      const res = await axiosSecure.get("/riders");
      return res.data;
    },
  });

  // to addd  || approved user

  const handleApproval = (id) => {
    const updateInfo = { status: "approved" };

    axiosSecure
      .patch(`/riders/${id}`, updateInfo)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Rider's has been approved !",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      })
      .catch((error) => {
        console.error("Submission Error:", error);

        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong! Please try again.",
        });
      });
  };

  return (
    <div>
      <h2 className="lg:text-5xl text-center lg:py-6 text-xl text-teal-800 font-bold">
        Riders pending approval : {riders.length}
      </h2>
      <div className="">
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th className="text-center text-xl font-bold">Name</th>
                <th className="text-center text-xl font-bold">Email</th>
                <th className="text-center text-xl font-bold">Status</th>
                <th className="text-center text-xl font-bold">District</th>
                <th className="text-center text-xl font-bold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {riders.map((rider, index) => (
                <tr>
                  <th>{index + 1} </th>
                  <td className="text-center">{rider.name}</td>
                  <td className="text-center">{rider.email}</td>
                  <td className="text-center font-bold">
                    <p
                      className={`${
                        rider.status === "approved"
                          ? "text-green-500"
                          : "text-red-600"
                      }  `}
                    >
                      {rider.status}
                    </p>
                  </td>
                  <td className="text-center">{rider.district}</td>
                  <td className="space-x-3 text-center">
                    <button
                      onClick={() => handleApproval(rider._id)}
                      className="btn hover:bg-green-400 "
                    >
                      <FaUserCheck />
                    </button>
                    <button className="btn hover:bg-red-500">
                      <IoPersonRemove />
                    </button>
                    <button className="btn hover:bg-gray-300">
                      <IoTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ApproveRiders;
