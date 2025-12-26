import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const [paymentInfo, setPaymentInfo] = useState({});
  const sessionId = searchParams.get("session_id");
  const axiosSecure = useAxiosSecure();

  console.log(sessionId);

  useEffect(() => {
    if (sessionId) {
      axiosSecure
        .patch(`/payment-success?session_id=${sessionId}`)
        .then((res) => {
          console.log(res.data);
          setPaymentInfo({
            transactionId: res.data.transactionId,
            trackingId: res.data.trackingId,
          });
        });
    }
  }, [sessionId, axiosSecure]);

  return (
    <div className="text-center">
      <h2 className="lg:text-4xl py-4 lg:pt-20 lg:pb-10 font-bold text-teal-800 text-xl">
        Payment Succesfull !
      </h2>
      <p className="text-xl pt-2 font-semibold">
        Your TransactionId: {paymentInfo.transactionId}
      </p>
      <p className="text-xl pt-2 font-semibold">
        Your Parcel Tracking id: {paymentInfo.trackingId}{" "}
      </p>
    </div>
  );
};

export default PaymentSuccess;
