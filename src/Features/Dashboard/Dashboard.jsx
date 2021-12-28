import React from "react";
import { Link } from "react-router-dom";
import BlogsList from "../Blogs/BlogsList";
import "./dashboard.css";

function Dashboard() {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <Link to="/new">
          <button className="newBtn">New Blog</button>
        </Link>
      </div>
      <div className="blogList">
        <BlogsList />
      </div>
    </div>
  );
}

export default Dashboard;
