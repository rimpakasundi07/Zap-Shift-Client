import React from "react";
import Marquee from "react-fast-marquee";

const Brands = () => {
  const logos = [
    "https://i.ibb.co/XZMPBHD3/amazon.png",
    "https://i.ibb.co/fGHpVwSY/casio.png",
    "https://i.ibb.co/Kjvk64ch/moonstar.png",
    "https://i.ibb.co/hxmWkPNJ/star.png",
    "https://i.ibb.co/zTCB34NV/randstad.png",
    "https://i.ibb.co/mVSn4YSn/start-people.png",
  ];
  return (
    <div>
      <section className="bg-gray-50 py-10">
        <h3 className="text-center text-teal-800 font-semibold mb-6">
          We've helped thousands of sales teams
        </h3>

        <Marquee speed={40} gradient={false} pauseOnHover={true}>
          {logos.map((logo, idx) => (
            <div key={idx} className="mx-10 flex items-center">
              <img
                src={logo}
                className="h-12 object-contain transition"
                alt="logo"
              />
            </div>
          ))}
        </Marquee>
      </section>
    </div>
  );
};

export default Brands;
