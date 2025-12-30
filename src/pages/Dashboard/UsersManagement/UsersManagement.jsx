import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const UsersManagement = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users`);
      return res.data;
    },
  });
  return (
    <div>
      <p className="lg:text-5xl text-center lg:py-6 text-xl text-teal-800 font-bold">
        Manage Users: {users.length}
      </p>
      {/* table */}
      <div className="">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th className=" text-xl font-bold">Name</th>
                <th className="text-center text-xl font-bold">Email</th>
                <th className="text-center text-xl font-bold">Admin Action</th>
                <th className="text-center text-xl font-bold">Other Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* row  */}
              {users.map((user, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={user.photoURL}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-center">
                          {user.displayName}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="text-center text-xl lg:text-2xl text-sky-400 font-bold">
                    {user.email}
                  </td>
                  <td className="text-center font-bold">Admin</td>
                  <td className="text-center font-bold">Actions :</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UsersManagement;
