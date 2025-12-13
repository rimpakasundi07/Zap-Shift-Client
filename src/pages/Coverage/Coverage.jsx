import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Coverage = () => {
  const position = [51.505, -0.09];
  return (
    <div>
      <h2 className="text-xl font-bold text-teal-900 py-3 lg:py-10 text-center  lg:text-5xl">
        We are available in 750 districts
      </h2>
      <div className=""></div>
      {/*  */}
      <div className=" w-11/12 mx-auto h-[1000px]">
        <MapContainer
          center={position}
          zoom={15}
          scrollWheelZoom={false}
          className="h-[500px]"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
