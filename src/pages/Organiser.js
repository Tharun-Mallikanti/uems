import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Header from "./admin/Header";
import Report from "./organiser/Report";
import Schedule from "./organiser/Schedule";
import Requests from "./Requests";
const Organiser = () => {
  const Organisernavs = [
    {
      to: "/organiser",
      value: "Requests",
    },
    {
      to: "/organiser/schedule",
      value: "Schedule",
    },
    {
      to: "/organiser/report",
      value: "Report",
    },
  ];
  return (
    <div>
      <Header usertype="Organiser" navs={Organisernavs} />
      <Outlet />
    </div>
  );
};
export default Organiser;
