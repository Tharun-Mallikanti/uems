import React from "react";

const Accordionitem = (props) => {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="panelsStayOpen-headingOne">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={props.num}
          aria-expanded="true"
          aria-controls="panelsStayOpen-collapseOne"
        >
          {props.name}
        </button>
      </h2>
      <div
        id={props.num.slice(1)}
        className="accordion-collapse collapse show"
        aria-labelledby="panelsStayOpen-headingOne"
      >
        <div className="accordion-body">
          <p>
            <strong>Name: </strong>
            {props.text.name}
          </p>
          <p>
            <strong>No of participants: </strong>
            {props.text.nParticipants}
          </p>
          <p>
            <strong>Date: </strong>
            {props.text.date}
          </p>
          <p>
            <strong>start: </strong>
            {props.text.timeIn}
          </p>
          <p>
            <strong>end: </strong>
            {props.text.timeOut}
          </p>
          <p>
            <strong>Venue: </strong>
            {props.text.venue}
          </p>
          <p>
            <strong>Description: </strong>
            {props.text.desc}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Accordionitem;
