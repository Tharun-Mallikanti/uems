import React, { useEffect, useState } from "react";
import Accordionitem from "./Accordionitem";
import ApprovedEvents from "./ApprovedEventsinfo";
function Approved() {
  const [jsonData, setJsonData] = useState([]);
  async function getData() {
    let res = await fetch("http://localhost:5000/api/admin/approved");
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
