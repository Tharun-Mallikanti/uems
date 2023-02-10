import React from "react";

const Card = (props) => {
  return (
    <div className="col-lg-4 coll mx-md-auto">
      <div className="px-md-5 py-md-3">
        <h4>
          <strong>{props.text.name}</strong>
        </h4>
        <p>
          Description:
          {props.text.desc}
        </p>
        <p>
          Date:
          {props.text.date}
        </p>
        <p>
          start:
          {props.text.timeIn}
        </p>
        <p>
          end:
          {props.text.timeOut}
        </p>
        <p>
          Venue:
          {props.text.venue}
        </p>
      </div>
    </div>
  );
};
export default Card;
