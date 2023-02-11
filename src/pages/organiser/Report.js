import React, { useEffect, useState } from "react";
import ReportComp from "./ReportComp";
const Report = () => {
  const [search, setSearch] = useState("");
  const [jsonData, setJsonData] = useState([]);
  async function getData() {
    let res = await fetch("http://localhost:5000/api/admin/approved");
    let data = await res.json();
    setJsonData(data);
  }
  useEffect(() => {
    getData();
    console.log("Page load empty dependancy array");
  }, []);
  return (
    <div className="container my-4">
      <h2 className="mt-3">Filter Reports</h2>`
      <div>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="form-control"
          placeholder="Search for Event"
          aria-label="Name of the Event"
        />
      </div>
      <h3 className="my-4">Search Results</h3>
      <div className="table my-4" style={{ overflowX: "auto" }}>
        <table className="table table-hover" style={{ minWidth: "600px" }}>
          <thead>
            <tr>
              <th scope="col">S.No.</th>
              <th scope="col">Event name</th>
              <th scope="col">Event Description</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {jsonData
              .filter((ele) =>
                ele.name.toLowerCase().includes(search.toLowerCase())
              )
              .map((ele, i) => {
                return <ReportComp key={ele._id} num={i + 1} text={ele} />;
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Report;
