import React from "react";
import { Link } from "react-router-dom";

const BlogList = ({ blogs }) => {
  if (blogs.length === 0) {
    return;
  }
  return (
    <div>
      {blogs.map(blog => (
        <p className="blog" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
        </p>
      ))}
    </div>
  );
};

export default BlogList;
