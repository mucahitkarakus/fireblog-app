import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import CreateBlog from "../Pages/CreateBlog";
import Details from "../Pages/Details";
import UpdatePost from "../Pages/UpdatePost";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Section */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/post/create" element={<CreateBlog />} />
        <Route path="/post/update/:id" element={<UpdatePost />} />
        <Route path="/post/:id" element={<Details />} />
        {/* Auth Section */}
        <Route path="/auth/login" element={<Dashboard />} />
        <Route path="/auth/register" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
