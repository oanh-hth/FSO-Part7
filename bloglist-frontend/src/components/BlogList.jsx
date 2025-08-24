import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import { Pagination } from "@tanstack/react-table";

const BlogList = ({ blogs }) => {
  if (blogs.length === 0) {
    return;
  }

  let active = 2;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }
  return (
    <Container className="mt-5 p-5 rounded border">
      {blogs.map(blog => (
        <p className="blog" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
        </p>
      ))}
      {/* <Pagination size="sm">{items}</Pagination> */}
    </Container>
  );
};

export default BlogList;
