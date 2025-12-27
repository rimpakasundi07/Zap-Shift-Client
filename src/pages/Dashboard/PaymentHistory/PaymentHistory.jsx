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
      {/* table */}
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th className="lg:text-2xl text-xl font-bold">Amount</th>
              <th className=" lg:text-2xl text-xl font-bold">Transaction Id</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => (
              <tr key={payment._id}>
                <th>{index + 1}</th>
                <td>Rimpa kasundi</td>
                <td className="lg:text-2xl text-xl font-bold text-sky-400 ">
                  $ {payment.amount}
                </td>
                <td>{payment.transactionId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
