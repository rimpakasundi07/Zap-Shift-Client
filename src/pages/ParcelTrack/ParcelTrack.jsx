import React from "react";
import { useParams } from "react-router";

const ParcelTrack = () => {
  const { trackingId } = useParams();
  return (
    <div className="p-8">
      <h2 className="lg:text-5xl text-center lg:py-6 text-xl text-teal-800 font-bold">
        Track your package: {trackingId}
      </h2>
    </div>
  );
};

export default ParcelTrack;
