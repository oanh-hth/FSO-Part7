import { use } from "react";
import { Link, useParams } from "react-router-dom";

const User = ({ user }) => {
  if (!user) {
    return null;
  }
  return (
    <div>
      <h4>{user.username}</h4>
      <h5>Added blogs</h5>
      <ul>
        {user.blogs.map(blog => (
          <li key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default User;
