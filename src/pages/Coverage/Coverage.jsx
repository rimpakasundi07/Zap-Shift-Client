import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";

const Coverage = () => {
  const position = [51.505, -0.09];
  return (
    <div>
      <h2 className="text-xl lg:text-5xl">We are available in 750 districts</h2>
      <div className=""></div>
      {/*  */}
      <div className="">
        <MapContainer center={position}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
