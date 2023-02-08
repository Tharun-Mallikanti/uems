import React from "react";

const Schedule = () => {
  return (
    <form className="my-4 container">
      <div className="mb-3">
        <label htmlFor="input-group-text" className="form-label">
          Name of the Event
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleEvent"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="input-group mb-3">
        <label className="input-group-text" htmlFor="inputGroupSelect01">
          Type of the event
        </label>
        <select className="form-select" id="inputGroupSelect01">
          <option>Choose...</option>
          <option value="1">Type 1</option>
          <option value="2">Type 2</option>
          <option value="3">Type 3</option>
          <option value="3">others</option>
        </select>
      </div>
      <div className="form-outline mb-3">
        <label className="form-label" htmlFor="typeNumber">
          Number of the participants
        </label>
        <input
          type="number"
          id="typeNumber"
          min="50"
          max="2000"
          className="form-control"
        />
      </div>
      <div
        id="date-picker-example"
        className="md-form md-outline input-with-post-icon datepicker mb-3"
        inline="true"
      >
        <label htmlFor="example">Date</label>
        <input placeholder="Select date" type="date" className="form-control" />
      </div>
      <div className="row mb-3">
        <div className="col">
          <label htmlFor="appt">Time In:</label>
          <input className="form-control" type="time" id="appt" name="appt" />
        </div>
        <div className="col">
          <label htmlFor="appt">Time out:</label>
          <input className="form-control" type="time" id="appt" name="appt" />
        </div>
      </div>
      <div className="input-group mb-3">
        <label className="input-group-text" htmlFor="inputGroupSelect01">
          Venue
        </label>
        <select className="form-select" id="inputGroupSelect01">
          <option>Choose...</option>
          <option value="1">venue 1</option>
          <option value="2">venue 2</option>
          <option value="3">venue 3</option>
        </select>
      </div>
      <div className="mb-3 mt-5">
        <p>Refreshments</p>
        <div className="row justify-content-between">
          <div className="col-lg-6">
            <div className="mb-3 d-flex align-items-center justify-content-between">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="item-1"
                  id="item-1"
                />
                <label className="form-check-label" htmlFor="item-1">
                  Item 1
                </label>
              </div>
              <div className="col-sm-auto col-4">
                <input
                  className="form-control"
                  type="number"
                  name="count-1"
                  id="count-1"
                  placeholder="Count"
                  min="0"
                  disabled
                />
              </div>
            </div>
            <div className="mb-3 d-flex align-items-center justify-content-between">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="item-2"
                  id="item-2"
                />
                <label className="form-check-label" htmlFor="item-2">
                  Item 2
                </label>
              </div>
              <div className="col-sm-auto col-4">
                <input
                  className="form-control"
                  type="number"
                  name="count-2"
                  id="count-2"
                  placeholder="Count"
                  min="0"
                  disabled
                />
              </div>
            </div>
            <div className="mb-3 d-flex align-items-center justify-content-between">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="item-3"
                  id="item-3"
                />
                <label className="form-check-label" htmlFor="item-3">
                  Item 3
                </label>
              </div>
              <div className="col-sm-auto col-4">
                <input
                  className="form-control"
                  type="number"
                  name="count-3"
                  id="count-3"
                  placeholder="Count"
                  min="0"
                  disabled
                />
              </div>
            </div>
            <div className="mb-3 d-flex align-items-center justify-content-between">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="item-4"
                  id="item-4"
                />
                <label className="form-check-label" htmlFor="item-4">
                  Item 4
                </label>
              </div>
              <div className="col-sm-auto col-4">
                <input
                  className="form-control"
                  type="number"
                  name="count-4"
                  id="count-4"
                  placeholder="Count"
                  min="0"
                  disabled
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-3" style={{ textAlign: "end" }}>
        <input
          className="btn btn-danger px-4 mx-sm-5"
          type="button"
          value="Review"
        />
        <input
          className="btn btn-success px-4 mx-sm-5"
          type="submit"
          value="submit"
        />
      </div>
    </form>
  );
};
export default Schedule;
