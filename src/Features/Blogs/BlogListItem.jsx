import React from "react";
import { Link } from "react-router-dom";
import "./BlogListItem.css";

function BlogListItem({ blog }) {
  return (
    <div className="blog-list-item">
      <Link to={`/${blog.id}`}>
        <h5>{blog.title}</h5>
      </Link>
    </div>
  );
}

export default BlogListItem;
