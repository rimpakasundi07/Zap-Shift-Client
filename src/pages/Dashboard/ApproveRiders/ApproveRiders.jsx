import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { IoPersonRemove } from "react-icons/io5";
import { FaUserCheck } from "react-icons/fa6";
import { IoTrash } from "react-icons/io5";
import Swal from "sweetalert2";

const ApproveRiders = () => {
  const axiosSecure = useAxiosSecure();

  const { refetch, data: riders = [] } = useQuery({
    queryKey: ["riders", "pending"],
    queryFn: async () => {
      const res = await axiosSecure.get("/riders");
      return res.data;
    },
  });

  // rider updated  status

  const updateRiderStatus = (rider, status) => {
    const updateInfo = { status: status, email: rider.email };

    axiosSecure
      .patch(`/riders/${rider._id}`, updateInfo)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Rider's status is set to ${status}.`,
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

  // rider delete function
  const handleDeleteRider = (rider) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#16a34a",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/riders/${rider._id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Rider deleted successfully",
                showConfirmButton: false,
                timer: 2000,
              });
            }
          })
          .catch((error) => {
            console.error("Delete Error:", error);
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Failed to delete rider!",
            });
          });
      }
    });
  };

  //  approved user

  const handleApproval = (rider) => {
    updateRiderStatus(rider, "approved");
  };

  // user rejected

  const handleRejection = (rider) => {
    updateRiderStatus(rider, "rejected");
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
                    {/* add button  */}
                    <button
                      onClick={() => handleApproval(rider)}
                      className="btn hover:bg-green-400 "
                    >
                      <FaUserCheck />
                    </button>
                    {/* reject button */}
                    <button
                      onClick={() => handleRejection(rider)}
                      className="btn hover:bg-red-500"
                    >
                      <IoPersonRemove />
                    </button>
                    {/* trash button  */}
                    <button
                      onClick={() => handleDeleteRider(rider)}
                      className="btn hover:bg-gray-300"
                    >
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
