import React from "react";
import { Outlet } from "react-router";
import Footer from "./Footer";
import NavBar from "./NavBar";

const RootLayout = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
