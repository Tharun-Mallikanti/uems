import React, { useEffect, useState } from "react";
import Navbar from "./home/Navbar";
import "./home.css";
import { Outlet } from "react-router-dom";
const Home = () => {
  return (
    <div className="home">
      <Navbar />
      {/* <Carousel />
      <section className="upevt py-md-5">
        <div className="oevt py-sm-4">
          <h3>Upcoming Events</h3>
        </div>
        {nestedArray.map((subArray, index) => (
          <div key={index} className="row">
            {subArray.map((element, i) => (
              <Card key={i} text={element} />
            ))}
          </div>
        ))}
      </section>
      <section id="footer">
        <Footer />
      </section> */}
      <Outlet />
    </div>
  );
};
export default Home;
