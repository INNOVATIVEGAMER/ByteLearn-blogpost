import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import AppContext from "../../AppContext";
import "./BlogForm.css";

function BlogForm() {
  const context = useContext(AppContext);
  const history = useHistory();
  const params = useParams();

  useEffect(() => {
    if (params.id) {
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const blogs = context.data.blogs;
    const form = new FormData(e.target);
    const title = form.get("title");
    const content = form.get("content");

    const id = params.id ? Number(params.id) : blogs.length + 1;
    const newBlog = { id, title, content };
    let newBlogs = [];

    if (params.id) {
      const temp = blogs.filter((el) => el.id !== id);
      newBlogs = [...temp, newBlog];
    } else {
      newBlogs = [...blogs, newBlog];
    }

    context.setblogs(newBlogs);
    history.push("/");
  };

  return (
    <>
      <div>
        <Link to="/">
          <button className="backBtn">Back To Index</button>
        </Link>
      </div>
      <div>
        <form
          className="form"
          method="POST"
          encType="multipart/form-data"
          onSubmit={handleSubmit}
        >
          <label className="titleLabel" htmlFor="title">
            Title
          </label>
          <input className="titleInput" type="text" id="title" name="title" />
          <label className="contentLabel" htmlFor="content">
            Content
          </label>

          <textarea
            className="contentInput"
            id="content"
            name="content"
            rows="4"
            cols="50"
          ></textarea>
          <input className="submitBtn" type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
}

export default BlogForm;
