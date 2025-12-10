import React from "react";

import logo from "../../assets/logo.png";

const Logo = () => {
  return (
    <div className="flex items-center">
      <img className=" pb-2" src={logo} alt="" />
      <p className="font-bold lg:text-4xl text-2xl lg:py-3 py-2 text-[#CAEB66] hover:text-yellow-400 ">
        Zap Shift
      </p>
    </div>
  );
};

export default Logo;
