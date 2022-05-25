// import logo from "./logo.svg";
// import { Route, Routes } from "react-router-dom";
// import React from "react";
// import { useEffect, useState } from "react";
import AddUser from "./components/AddUser";
import NavBar from "./components/NavBar";
import AllUsers from "./components/AllUsers";
import EditUser from "./components/EditUser";
import DelUser from "./components/DelUser";
import Codeforinterview from "./components/codeforinterview";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Codeforinterview />} />
          <Route path="/all" element={<AllUsers />} />
          <Route path="/add" element={<AddUser />} />
          <Route path="/edit/:id" element={<EditUser />} />
          <Route path="/del/:id" element={<DelUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
