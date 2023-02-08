import React from "react";
const Footer = () => {
  return (
    <footer>
      <div className="cus">
        <h3>Contact us</h3>
      </div>
      <div className="row">
        <div className="col-sm-3 col-6 coll2">
          <i
            className="fa fa-phone p-md-4 p-2"
            style={{ fontSize: "36px" }}
          ></i>
          <p>Phone Number</p>
        </div>
        <div className="col-sm-3 col-6 coll2">
          <i
            className="fa fa-envelope p-md-4 p-2"
            style={{ fontSize: "36px" }}
          ></i>
          <p>Email</p>
        </div>
        <div className="col-sm-3 col-6 coll2">
          <i
            className="fa fa-instagram p-md-4 p-2"
            style={{ fontSize: "36px" }}
          ></i>
          <p>Instagram</p>
        </div>
        <div className="col-sm-3 col-6 coll2">
          <i
            className="fa fa-twitter p-md-4 p-2"
            style={{ fontSize: "36px" }}
          ></i>
          <p>Twitter</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
