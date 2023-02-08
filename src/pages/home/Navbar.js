import React from "react";
import logo from "./logo.png";
import { NavLink } from "react-router-dom";
import Login from "../Login";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-dark py-md-4 p-2 nav">
      <div className="container-fluid">
        <a className="navbar-brand ms-md-4" href="#">
          <img
            src={logo}
            alt=""
            width="40"
            height="40"
            className="d-inline-block align-text-top me-md-4"
          />
          Event Management
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item mx-md-5">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item mx-md-5">
              <a className="nav-link" href="#">
                About us
              </a>
            </li>
            <li className="nav-item mx-md-5">
              <a className="nav-link" href="#footer">
                Contact us
              </a>
            </li>
          </ul>
          <div className="me-md-4">
            <Login />
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
