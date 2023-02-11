import React from "react";
import ReactDOM from "react-dom/client";
import Print from "./Print";
import ReportDetails from "./ReportDetails";
const ReportComp = (props) => {
  const handleDownload = async (i) => {
    const newWindow = window.open(
      "",
      i,
      "resizable=yes,status=0,toolbar=0,scrollbars=1"
    );
    const root = await ReactDOM.createRoot(newWindow.document.body);
    await root.render(<Print key={props.text._id} ele={props.text} />);
    newWindow.print();
  };
  return (
    <tr>
      <td scope="row">{props.num}</td>
      <td>{props.text.name}</td>
      <td className="desc">{props.text.desc}</td>
      <td>
        <ReportDetails ele={props.text} />
        <button
          className="btn btn-success m-1"
          onClick={() => handleDownload(props.num)}
        >
          <i className="fa fa-download"></i> Download
        </button>
      </td>
    </tr>
  );
};
export default ReportComp;
