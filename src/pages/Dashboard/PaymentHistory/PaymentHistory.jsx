import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments?email${user.email}`);
      return res.data;
    },
  });
  return (
    <div>
      <h2 className=" text-xl lg:text-5xl font-bold text-teal-700 ">
        Payment history: {payments.length}
      </h2>
    </div>
  );
};

export default PaymentHistory;
