import React, { Component, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const Login = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const handleOnChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleOnClick = async () => {
    let res = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    console.log(data);
    if (data.success) {
      localStorage.setItem("token", data.token);
      navigate("/" + data.type);
    } else {
      Swal.fire("INVALID", "username or password", "error");
      // setIsOpen(false);
    }
  };
  return (
    <>
      <div className="d-flex align-items-center justify-content-center">
        <Button variant="btn btn-warning px-4" onClick={openModal}>
          Login
        </Button>
      </div>
      <Modal show={isOpen} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label htmlFor="exampleInputEmail1" className="form-label">
            Username
          </label>
          <input
            type="email"
            name="username"
            value={formData.username}
            className="form-control"
            id="exampleInputEmail1"
            onChange={handleOnChange}
            aria-describedby="emailHelp"
            placeholder="Enter username"
          />
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              className="form-control"
              onChange={handleOnChange}
              id="exampleInputPassword1"
              placeholder="Enter password"
            />
          </div>
          <div className="form-check py-3">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="form2Example31"
            />
            <label className="form-check-label" htmlFor="form2Example31">
              Keep me logged in
            </label>
          </div>
          <div className="btn-div mb-4">
            <button
              type="submit"
              className="btn btn-primary mx-5 px-5 py-2"
              onClick={handleOnClick}
            >
              Login
            </button>
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

export default Login;
