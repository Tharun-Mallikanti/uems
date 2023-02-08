import React from "react";
import Navbar from "./home/Navbar";
import "./home.css";
import Carousel from "./home/Carousel";
import Card from "./home/Card";
import Footer from "./home/Footer";
const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Carousel />
      <section className="upevt py-md-5">
        <div className="oevt py-sm-4">
          <h3>Upcoming Events</h3>
        </div>
        <div className="row">
          <Card num="1" />
          <Card num="2" />
          <Card num="3" />
        </div>
        <div className="row">
          <Card num="4" />
          <Card num="5" />
          <Card num="6" />
        </div>
      </section>
      <section id="footer">
      <Footer />
      </section>
    </div>
  );
};
export default Home;
