import React from "react";
import c1 from "./c1.png";
import c2 from "./c2.png";
import c3 from "./c3.png";
const Carousel = () => {
  return (
    <div className="row">
      <div className="col-md-7 p-sm-5 my-sm-5 intro-text">
        <h1 className="display-md-1 display-4">University Events</h1>
        <p className="display-md-2">
          Welcome to our university event management site, your one-stop
          solution for all your event planning needs. Our platform is designed
          specifically for universities, providing a comprehensive and
          easy-to-use solution for all types of events, ranging from small
          departmental gatherings to large-scale university-wide events. Our
          mission is to provide you with a seamless and efficient event planning
          experience, saving you time and resources while ensuring a successful
          event outcome.
        </p>
      </div>
      <div className="col-md-5 my-sm-4 my-3">
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="2000"
        >
          <div className="carousel-inner ms-auto">
            <div className="carousel-item active text-center">
              <img src={c1} className="d-block w-75" />
            </div>
            <div className="carousel-item text-center">
              <img src={c2} className="d-block w-75" alt="..." />
            </div>
            <div className="carousel-item text-center">
              <img src={c3} className="d-block w-75" alt="..." />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Carousel;
