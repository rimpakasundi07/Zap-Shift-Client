import React from "react";
import useRole from "../../../hooks/useRole";
import Loading from "../../../components/Loding/Loading";
import AdminDashboardHome from "./AdminDashboardHome";

const DashboardHome = () => {
  const { role, roleLoading } = useRole();
  if (roleLoading) {
    return <Loading></Loading>;
  }
  if (role === "admin") {
    return <AdminDashboardHome></AdminDashboardHome>;
  }

  return (
    <div>
      <h2 className="text-teal-800 py-2 lg:p-6 font-bold lg:text-4xl text-xl">
        Dashboard Home
      </h2>
    </div>
  );
};

export default DashboardHome;
