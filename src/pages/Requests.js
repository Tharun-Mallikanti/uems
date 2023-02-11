import React, { useEffect, useState } from "react";
import RequestComp from "./organiser/RequestComp";
import Swal from "sweetalert2";
const Requests = () => {
  const [jsonData, setJsonData] = useState([]);
  async function getData() {
    let res = await fetch("/api/admin/pending");
    let data = await res.json();
    console.table(data);
    setJsonData(data);
  }
  useEffect(() => {
    getData();
    console.log("Page load empty dependancy array");
  }, []);
  const handleOnClick = async (e, i, id) => {
    console.log(i);
    let res = await fetch("/api/organiser/approvals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ st: i, id: id }),
    });
    let d = await res.json();
    if (d.success) {
      let newJsonData = [...jsonData];
      newJsonData[i].approved = e;
      setJsonData(newJsonData);
      Swal.fire("SUCCESS", "Status Updated !!", "success");
    } else {
      Swal.fire("OOPS", "Not updated !!", "error");
    }
  };
  return (
    <div className="container">
      {jsonData
        .filter((ele) => ele.approved == null)
        .map((ele, i) => {
          return (
            <RequestComp
              key={ele._id}
              num={ele._id}
              name={ele.name}
              supporttxt={ele.desc}
              txt={ele}
              i={i}
              handleOnClick={handleOnClick}
            />
          );
        })}
    </div>
  );
};
export default Requests;
