import React, { useEffect, useState } from "react";
import Navbar from "./home/Navbar";
import "./home.css";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
const Home = (props) => {
  return (
    <div className="home">
      <Navbar token={props.token} setToken={props.setToken} />
      <Outlet />
    </div>
  );
};
export default Home;
