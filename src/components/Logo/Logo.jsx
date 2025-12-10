import React from "react";

import logo from "../../assets/logo.png";

const Logo = () => {
  return (
    <div className="flex gap-2 items-center">
      <img src={logo} alt="" />
      <p className="font-bold lg:text-5xl text-xl lg:py-5 py-2 text-white hover:text-yellow-400 ">
        Zap Shift
      </p>
    </div>
  );
};

export default Logo;
