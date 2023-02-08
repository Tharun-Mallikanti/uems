import React, { useState } from "react";
import Swal from "sweetalert2";
function Request() {
  const nData = {
    name: "",
    nParticipants: "",
    desc: "",
    date: "",
    timeIn: "",
    timeOut: "",
    venue: "",
    approved: null,
    refreshments: false,
  };
  const [formData, setFormData] = useState(nData);
  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleOnChecked = (e, i) => {
    let val = i === 1 ? e.target.checked : !e.target.checked;
    setFormData({ ...formData, refreshments: val });
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    let res = await fetch("http://localhost:5000/api/admin/form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const json = await res.json();
    if (json.success) {
      Swal.fire("SUCCESS", "form submitted successfully", "success");
      setFormData(nData);
    }
  };
  return (
    <div>
      <form className="my-4 container" onSubmit={handleOnSubmit}>
        <div className="mb-3">
          <label htmlFor="input-group-text" className="form-label">
            Name of the Event
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            onChange={handleOnChange}
            value={formData.name}
            id="exampleEvent"
          />
        </div>
        <div className="form-outline mb-3">
          <label className="form-label" htmlFor="typeNumber">
            Number of the participants
          </label>
          <input
            type="number"
            id="typeNumber"
            max="200"
            name="nParticipants"
            onChange={handleOnChange}
            value={formData.nParticipants}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="desc"
            name="desc"
            rows="3"
            placeholder="Description"
            value={formData.desc}
            onChange={handleOnChange}
            required={true}
          ></textarea>
        </div>
        <div
          id="date-picker-example"
          className="md-form md-outline input-with-post-icon datepicker mb-3"
          inline="true"
        >
          <label htmlFor="example">Date</label>
          <input
            placeholder="Select date"
            type="date"
            name="date"
            onChange={handleOnChange}
            value={formData.date}
            className="form-control"
          />
        </div>
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="appt">Time In:</label>
            <input
              className="form-control"
              type="time"
              id="appt"
              onChange={handleOnChange}
              name="timeIn"
              value={formData.timeIn}
            />
          </div>
          <div className="col">
            <label htmlFor="appt">Time out:</label>
            <input
              className="form-control"
              type="time"
              id="appt"
              name="timeOut"
              onChange={handleOnChange}
              value={formData.timeOut}
            />
          </div>
        </div>
        <div className="input-group mb-3">
          <label className="input-group-text" htmlFor="inputGroupSelect01">
            Venue
          </label>
          <select
            name="venue"
            value={formData.venue}
            onChange={handleOnChange}
            className="form-select"
            id="inputGroupSelect01"
          >
            <option>Choose...</option>
            <option value="venue 1">venue 1</option>
            <option value="venue 2">venue 2</option>
            <option value="venue 3">venue 3</option>
          </select>
        </div>
        <div className="mb-3">
          <p>Refreshments</p>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="refreshments"
              onChange={(event) => handleOnChecked(event, 1)}
              id="inlineRadio1"
              checked={formData.refreshments}
            />
            <label className="form-check-label" htmlFor="inlineRadio1">
              YES
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="refreshments"
              onChange={(event) => handleOnChecked(event, 2)}
              id="inlineRadio2"
              checked={!formData.refreshments}
            />
            <label className="form-check-label" htmlFor="inlineRadio2">
              NO
            </label>
          </div>
        </div>
        <div className="mb-3" style={{ textAlign: "end" }}>
          <input
            className="btn btn-danger px-4 mx-sm-5"
            type="reset"
            value="Reset"
          />
          <input
            className="btn btn-success px-4 mx-sm-5"
            type="submit"
            value="Request"
          />
        </div>
      </form>
    </div>
  );
}
export default Request;
