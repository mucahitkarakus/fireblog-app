import React from "react";
import BlogCard from "../components/BlogCard";
import Layout from "../components/Layout";

const Dashboard = () => {
  return (
    <Layout>
      <p className="text-center text-3xl font-extrabold mt-10">Dashboard</p>
      <div className="bg-gray-100 rounded mt-10 max-w-screen-xl mx-auto">
        <div className="p-5 flex flex-wrap gap-10 justify-center items-center"></div>
      </div>
    </Layout>
  );
};

export default Dashboard;
