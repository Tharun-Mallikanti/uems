import React, { useEffect, useState } from "react";
import Accordionitem from "./Accordionitem";
import ApprovedEvents from "./ApprovedEventsinfo";
const BACKEND_URL =
  process.env.NODE_ENV == "development"
    ? ""
    : "https://uems-backend.onrender.com";
function Approved() {
  const [jsonData, setJsonData] = useState([]);
  async function getData() {
    let res = await fetch(BACKEND_URL + "/api/admin/approved");
    let data = await res.json();
    console.table(data);
    setJsonData(data);
  }
  useEffect(() => {
    getData();
    console.log("Page load empty dependancy array");
  }, []);
  return (
    <div
      className="accordion mt-3 container"
      id="accordionPanelsStayOpenExample"
    >
      {jsonData.map((ele, i) => {
        return (
          <Accordionitem
            key={ele._id}
            name={ele.name}
            text={ele}
            num={"#panelsStayOpen-collapse" + ele._id}
          />
        );
      })}
    </div>
  );
}
export default Approved;
