import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Login from "../Pages/Login";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
