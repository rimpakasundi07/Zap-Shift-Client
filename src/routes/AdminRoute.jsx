import React from "react";
import useAuth from "../hooks/useAuth";

const AdminRoute = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return;
  }

  return (
    <div>
      <p></p>
    </div>
  );
};

export default AdminRoute;
