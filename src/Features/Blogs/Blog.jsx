import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Link, useParams } from "react-router-dom";
import AppContext from "../../AppContext";
import "./Blog.css";

function Blog() {
  const id = useParams().id;
  const history = useHistory();
  const context = useContext(AppContext);
  const blog = context.data.blogs.filter((el) => el.id === Number(id))[0];

  const deleteBlog = (e) => {
    e.preventDefault();
    const newBlogs = context.data.blogs.filter((el) => el.id !== Number(id));
    context.setblogs(newBlogs);
    history.push("/");
  };
  return (
    <div className="blog">
      <div>
        <Link to="/">
          <button className="backBtn">Back To Index</button>
        </Link>
      </div>
      <div className="blogBtns">
        <Link to={`/${id}/edit`}>
          <button className="editBtn">Edit</button>
        </Link>
        <button className="deleteBtn" onClick={deleteBlog}>
          Delete
        </button>
      </div>
      <div className="blogBody">
        <h2 className="blogHeader">{blog.title}</h2>
        <p className="blogContent">{blog.content}</p>
      </div>
    </div>
  );
}

export default Blog;
