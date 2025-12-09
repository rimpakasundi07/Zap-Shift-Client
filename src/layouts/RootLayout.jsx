import React from "react";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div>
      <p>Navbar</p>
      <Outlet></Outlet>
    </div>
  );
};

export default RootLayout;
