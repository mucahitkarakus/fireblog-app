import React, {useContext} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import CreateBlog from "../Pages/CreateBlog";
import Details from "../Pages/Details";
import UpdatePost from "../Pages/UpdatePost";
import {AuthContext} from "../context/AuthContext";

const AppRouter = () => {
  const {userInfo} = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Section */}
        <Route path="/" element={userInfo ? <Dashboard /> : <Login />} />
        <Route
          path="/post/create"
          element={userInfo ? <CreateBlog /> : <Login />}
        />
        <Route
          path="/post/update/:id"
          element={userInfo ? <UpdatePost /> : <Login />}
        />
        <Route path="/post/:id" element={userInfo ? <Details /> : <Login />} />
        {/* Auth Section */}
        <Route
          path="/auth/login"
          element={userInfo ? <Dashboard /> : <Login />}
        />
        <Route
          path="/auth/register"
          element={userInfo ? <Dashboard /> : <Register />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
