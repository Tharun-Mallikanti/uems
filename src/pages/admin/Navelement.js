import React from "react";
import { Link } from "react-router-dom";
const Navelement = (props) => {
  return (
    <li className="nav-item pe-md-5">
      <Link className="nav-link active" aria-current="page" to={props.to}>
        {props.value}
      </Link>
    </li>
  );
};
export default Navelement;
