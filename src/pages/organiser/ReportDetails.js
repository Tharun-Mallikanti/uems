import React, { Component, useState } from "react";
import { Modal, Button } from "react-bootstrap";
const ReportDetails = (props) => {
  let {
    name,
    desc,
    date,
    timeIn,
    timeOut,
    venue,
    nParticipants,
    refreshments,
  } = props.ele;
  const styleTh = {
    border: "1px solid black",
    padding: "8px",
    textAlign: "left",
    fontFamily: "arial, sans-serif",
  };
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (
    <>
      <div className="d-flex align-items-center justify-content-center">
        <Button variant="btn btn-primary m-1" onClick={openModal}>
          Details
        </Button>
      </div>
      <Modal show={isOpen} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ textAlign: "center" }}>
            <h4>University Event Management</h4>
            <h5>Event Report</h5>
            <table
              style={{
                borderCollapse: "collapse",
                border: "2px solid black",
                width: "80%",
                margin: "10px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <tr>
                <th style={styleTh}>Name</th>
                <td style={styleTh}>{name}</td>
              </tr>
              <tr>
                <th style={styleTh}>Description</th>
                <td style={styleTh}>{desc}</td>
              </tr>
              <tr>
                <th style={styleTh}>Date</th>
                <td style={styleTh}>{date}</td>
              </tr>
              <tr>
                <th style={styleTh}>Start</th>
                <td style={styleTh}>{timeIn}</td>
              </tr>
              <tr>
                <th style={styleTh}>End</th>
                <td style={styleTh}>{timeOut}</td>
              </tr>
              <tr>
                <th style={styleTh}>Number of participants</th>
                <td style={styleTh}>{nParticipants}</td>
              </tr>{" "}
              <tr>
                <th style={styleTh}>Venue</th>
                <td style={styleTh}>{venue}</td>
              </tr>
              <tr>
                <th style={styleTh}>Refreshments</th>
                <td style={styleTh}>{refreshments ? "YES" : "NO"}</td>
              </tr>
            </table>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Back
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ReportDetails;
