import React from "react";
const Print = (props) => {
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
    padding: "18px",
    textAlign: "left",
    fontFamily: "arial, sans-serif",
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>University Event Management</h1>
      <h2>Event Report</h2>
      <table
        style={{
          borderCollapse: "collapse",
          border: "2px solid black",
          width: "80%",
          margin: "20px",
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
  );
};
export default Print;
