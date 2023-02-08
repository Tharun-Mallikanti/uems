import React from "react";

const Report = () => {
  return (
    <div className="container my-4">
      <h2 className="mt-3">Filter Reports</h2>`
      <div>
        <input
          type="text"
          className="form-control"
          placeholder="Name of the Event"
          aria-label="Name of the Event"
        />
        <div className="row">
          <div className="my-2 col-lg-7">
            <div className="input-group">
              <span className="input-group-text">From date</span>
              <input
                type="date"
                className="form-control"
                id="date-from"
                name="date-from"
              />
              <span className="input-group-text">To date</span>
              <input
                type="date"
                className="form-control"
                id="date-to"
                name="date-to"
              />
            </div>
          </div>
          <div className="my-2 col-lg-auto align-self-center">(OR)</div>
          <div className="my-2 col-lg-3">
            <div className="input-group">
              <span className="input-group-text">Year</span>
              <input
                type="number"
                className="form-control"
                id="date-year"
                name="date-year"
                min="2020"
                max="9999"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="my-2 col-lg-4">
            <div className="input-group">
              <label htmlFor="desc" className="input-group-text">
                Event Type
              </label>
              <select
                className="form-select"
                aria-label="Type of Event"
                name="type"
                id="type"
              >
                <option selected>-- Select --</option>
                <option value="1">General</option>
                <option value="2">Meeting</option>
                <option value="3">Fest</option>
                <option value="4">Workshop</option>
              </select>
            </div>
          </div>
          <div className="my-2 col-lg-4">
            <input
              type="text"
              className="form-control"
              placeholder="Search Keywords"
              aria-label="Search keywords"
            />
          </div>
          <div className="my-2 col-lg-4">
            <button className="btn btn-primary">Search</button>
          </div>
        </div>
      </div>
      <h3 className="my-4">Search Results</h3>
      <div className="table my-4" style={{ overflowX: "auto" }}>
        <table className="table table-hover" style={{ minWidth: "600px" }}>
          <thead>
            <tr>
              <th scope="col">S.No.</th>
              <th scope="col">Event name</th>
              <th scope="col">Event Type</th>
              <th scope="col">Event Description</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Event 1</td>
              <td>Meeting</td>
              <td className="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                repudiandae odit, pariatur velit ipsam sed voluptas quisquam
                quae maxime fuga nemo enim ad autem tempore non! Velit deleniti
                animi exercitationem.
              </td>
              <td>
                <button className="btn btn-primary m-1">
                  <i className="fa fa-info-circle"></i> Details
                </button>
                <button className="btn btn-success m-1">
                  <i className="fa fa-download"></i> Download
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Event 2</td>
              <td>Workshop</td>
              <td className="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                repudiandae odit, pariatur velit ipsam sed voluptas quisquam
                quae maxime fuga nemo enim ad autem tempore non! Velit deleniti
                animi exercitationem.
              </td>
              <td>
                <button className="btn btn-primary m-1">
                  <i className="fa fa-info-circle"></i> Details
                </button>
                <button className="btn btn-success m-1">
                  <i className="fa fa-download"></i> Download
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Report;
