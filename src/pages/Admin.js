import React from "react";
import Header from "./admin/Header";
import "./admin.css";
import Request from "./admin/Request";
import App from "../App";
import Approved from "./admin/Approved";
import Declined from "./admin/Declined";
import Knowstatus from "./admin/Knowstatus";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
const Admin = () => {
  const navs = [
    {
      to: "/admin",
      value: "Request",
    },
    {
      to: "/admin/approved",
      value: "Approved",
    },
    {
      to: "/admin/declined",
      value: "Declined",
    },
    {
      to: "/admin/knowstatus",
      value: "KnowStatus",
    },
  ];
  return (
    <div>
      <Header usertype="Admin" navs={navs} />
      <Outlet />
    </div>
  );
};
export default Admin;
