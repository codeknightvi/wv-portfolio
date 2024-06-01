import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";

const Root = () => {
  return (
    <>
      <Navbar />
      Root
      <Outlet />
    </>
  );
};

export default Root;
