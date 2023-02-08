import React from "react";

const Card = (props) => {
  return (
    <div className="col-lg-4 coll mx-md-auto">
      <div className="px-md-5 py-md-5">
        <h4>Event {props.num}</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
          similique quis alias sint illum illo nam aspernatur voluptatum nulla
          impedit.
        </p>
      </div>
    </div>
  );
};
export default Card;
