import React, { useContext } from "react";
import "./BlogList.css";
import BlogListItem from "./BlogListItem";
import AppContext from "../../AppContext";

function BlogsList() {
  const context = useContext(AppContext);
  const blogs = context.data.blogs;
  console.log(blogs);
  return (
    <div className="list">
      {blogs.map((blog) => (
        <BlogListItem key={blog.id} blog={blog} />
      ))}
    </div>
  );
}

export default BlogsList;
