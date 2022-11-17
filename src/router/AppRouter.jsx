import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Dashboard} from "../Pages/Dashboard";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
