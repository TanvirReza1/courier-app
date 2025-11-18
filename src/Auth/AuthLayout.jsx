import React from "react";
import Logo from "../components/Logo";
import { Outlet } from "react-router";
import authImage from "../assets/authImage.png";
const AuthLayout = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Logo></Logo>
      <div className="flex ">
        <div className="flex-1">
          {/* left side */}
          <Outlet></Outlet>
        </div>
        <div className="flex-1">
          {/* right side  */}
          <img src={authImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
