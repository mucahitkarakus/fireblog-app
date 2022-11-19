import React from "react";
import BlogForm from "../components/BlogForm";
import Layout from "../components/Layout";

const CreateBlog = () => {
  return (
    <Layout>
      <div className="max-w-lg sm:mx-auto bg-slate-200 mt-10 mx-5">
        <BlogForm title_="Create New Post" />
      </div>
    </Layout>
  );
};

export default CreateBlog;
