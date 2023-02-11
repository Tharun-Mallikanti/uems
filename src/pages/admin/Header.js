import React from "react";
import { Link } from "react-router-dom";
import Navelement from "./Navelement";
const Header = (props) => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-dark py-md-4 p-2">
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">
          EMS
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {props.navs.map((e, i) => {
              return <Navelement key={i} to={e.to} value={e.value} />;
            })}
          </ul>
          <span className="pe-md-5">
            <i
              className="fa fa-user-circle icon me-sm-3"
              aria-hidden="true"
            ></i>
            {props.usertype}
          </span>
          <form className="d-flex">
            <Link
              className="btn btn-danger"
              type="button"
              to="/"
              onClick={() => localStorage.removeItem("token")}
            >
              Logout
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
};
export default Header;
