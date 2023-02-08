import React from "react";
import { Routes, Route } from "react-router-dom";
import Admin from "./pages/Admin";
import Approved from "./pages/admin/Approved";
import Declined from "./pages/admin/Declined";
import Knowstatus from "./pages/admin/Knowstatus";
import Request from "./pages/admin/Request";
import Home from "./pages/Home";
import Footer from "./pages/home/Footer";
import Navbar from "./pages/home/Navbar";
import Login from "./pages/Login";
import Organiser from "./pages/Organiser";
import Report from "./pages/organiser/Report";
import Schedule from "./pages/organiser/Schedule";
import Requests from "./pages/Requests";
const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/admin" element={<Admin />}>
          <Route path="" element={<Request />} />
          <Route path="approved" element={<Approved />} />
          <Route path="declined" element={<Declined />} />
          <Route path="knowstatus" element={<Knowstatus />} />
        </Route>
        <Route exact path="/organiser" element={<Organiser />}>
          <Route path="" element={<Requests />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="report" element={<Report />} />
        </Route>
      </Routes>
    </>
  );
};
export default App;
