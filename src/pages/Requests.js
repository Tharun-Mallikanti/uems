import React, { useEffect, useState } from "react";
import RequestComp from "./organiser/RequestComp";
import ApprovedEvents from "./admin/ApprovedEventsinfo";
const Requests = () => {
  const [jsonData, setJsonData] = useState([]);
  async function getData() {
    let res = await fetch("http://localhost:5000/api/admin/form");
    let data = await res.json();
    console.table(data);
    setJsonData(data);
  }
  useEffect(() => {
    getData();
    console.log("Page load empty dependancy array");
  }, []);
  return (
    <div className="container">
      {jsonData.map((ele, i) => {
        return (
          <RequestComp
            key={ele._id}
            num={ele._id}
            name={ele.name}
            supporttxt={ele.desc}
            txt={ele}
          />
        );
      })}
    </div>
  );
};
export default Requests;
