import React, { useEffect, useState } from "react";
import Carousel from "./Carousel";
import Card from "./Card";
import Footer from "./Footer";
const Body = () => {
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
  const l = 3;
  const funcNestedArray = (array, length) => {
    let nestedArray = [];
    let nestedArrayIndex = 0;
    for (let i = 0; i < array.length; i += length) {
      nestedArray[nestedArrayIndex] = array.slice(i, i + length);
      nestedArrayIndex += 1;
    }
    return nestedArray;
  };
  const nestedArray = funcNestedArray(jsonData, l);

  return (
    <div>
      <Carousel />
      <section className="upevt py-md-5">
        <div className="oevt py-sm-4">
          <h3>Upcoming Events</h3>
        </div>
        {nestedArray.map((subArray, index) => (
          <div key={index} className="row">
            {subArray.map((element, i) => (
              <Card key={i} text={element} />
            ))}
          </div>
        ))}
      </section>
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
};
export default Body;
