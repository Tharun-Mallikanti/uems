import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
function RequestComp(props) {
  const name = props.name;
  const supporttxt = props.supporttxt;
  const txt = props.txt;
  const handleOnClick = async (e, i) => {
    console.log(i);
    let res = await fetch("http://localhost:5000/api/organiser/approvals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ st: i, id: props.num }),
    });
    let d = await res.json();
    if (d.success) {
      Swal.fire("SUCCESS", "Status Updated !!", "success");
    } else {
      Swal.fire("OOPS", "Not updated !!", "error");
    }
  };

  return (
    <div className="card box-card mt-3">
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{supporttxt}</p>
        <a
          href="#"
          className="btn btn-primary text-end"
          data-bs-toggle="modal"
          data-bs-target={"#myModal" + props.num}
        >
          Show Details
        </a>
        <div className="clearfix">
          <button
            className="btn btn-success float-sm-end mt-3"
            onClick={(e) => {
              handleOnClick(e, true);
            }}
          >
            Approve
          </button>
          <button
            className="btn btn-danger float-sm-end mt-3 me-2"
            onClick={(e) => {
              handleOnClick(e, false);
            }}
          >
            Decline
          </button>
        </div>
      </div>
      <div
        className="modal fade"
        id={"myModal" + props.num}
        tabIndex="-1"
        aria-labelledby={"exampleModalLabel" + props.num}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title fs-5"
                id={"exampleModalLabel" + props.num}
              >
                {name}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>
                <strong>Name: </strong>
                {txt.name}
              </p>
              <p>
                <strong>No of participants: </strong>
                {txt.nParticipants}
              </p>
              <p>
                <strong>Date: </strong>
                {txt.date}
              </p>
              <p>
                <strong>start: </strong>
                {txt.timeIn}
              </p>
              <p>
                <strong>end: </strong>
                {txt.timeOut}
              </p>
              <p>
                <strong>Venue: </strong>
                {txt.venue}
              </p>
              <p>
                <strong>Description: </strong>
                {txt.desc}
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default RequestComp;
