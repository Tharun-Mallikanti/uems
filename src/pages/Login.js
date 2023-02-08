import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

class Login extends Component {
  state = {
    isOpen: false,
    formData: {
      username: "",
      password: "",
    },
  };

  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });
  handleOnChange = async (e) => {
    let newFormData = {
      ...this.state.formData,
      [e.target.name]: e.target.value,
    };
    this.setState({
      formData: newFormData,
    });
    console.log(this.state.formData);
  };
  handleOnClick = async () => {
    let res = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state.formData),
    });
    const json = await res.json();
    console.log(json);
  };
  render() {
    return (
      <>
        <div className="d-flex align-items-center justify-content-center">
          <Button variant="btn btn-warning px-4" onClick={this.openModal}>
            Login
          </Button>
        </div>
        <Modal show={this.state.isOpen} onHide={this.closeModal}>
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
              value={this.state.formData.username}
              className="form-control"
              id="exampleInputEmail1"
              onChange={this.handleOnChange}
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
                value={this.state.formData.password}
                className="form-control"
                onChange={this.handleOnChange}
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
                onClick={this.handleOnClick}
              >
                Login
              </button>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.closeModal}>
              Back
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default Login;
