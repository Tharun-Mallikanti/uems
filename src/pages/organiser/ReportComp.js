import React from "react";

const ReportComp = (props) => {
  return (
    <tr>
      <td scope="row">{props.num}</td>
      <td>{props.text.name}</td>
      <td className="desc">{props.text.desc}</td>
      <td>
        <button className="btn btn-primary m-1">
          <i className="fa fa-info-circle"></i> Details
        </button>
        <button className="btn btn-success m-1">
          <i className="fa fa-download"></i> Download
        </button>
      </td>
    </tr>
  );
};
export default ReportComp;
