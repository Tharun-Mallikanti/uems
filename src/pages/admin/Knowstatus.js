import React, { useState } from "react";
import Swal from "sweetalert2";
const Knowstatus = () => {
  const [n, setName] = useState(null);
  const handleOnChange = (e) => {
    setName(e.target.value);
  };
  const handleOnClick = async (e) => {
    let res = await fetch("http://localhost:5000/api/admin/status", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ n }),
    });
    let data = await res.json();
    if (data) {
      Swal.fire("APPROVED", "Event got approved", "success");
    } else {
      Swal.fire("DECLINED", "Event got declined", "error");
    }
  };
  return (
    <div className="my-4 container">
      <div className="mb-3">
        <label htmlFor="input-group-text" className="form-label">
          Name of the Event
        </label>
        <input
          type="text"
          name="name"
          value={n}
          onChange={handleOnChange}
          className="form-control"
          id="exampleEvent"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3" style={{ textAlign: "end" }}>
        <input
          className="btn btn-success px-4 mx-sm-5"
          type="button"
          value="Know Status"
          onClick={handleOnClick}
        />
      </div>
    </div>
  );
};
export default Knowstatus;
