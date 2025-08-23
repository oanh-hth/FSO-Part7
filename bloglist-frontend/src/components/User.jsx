import { use } from "react";
import { useParams } from "react-router-dom";

const User = ({ user }) => {
  if (!user) {
    return null;
  }
  return (
    <div>
      <h3>{user.username}</h3>
      <h4>Added blogs</h4>
      <ul>
        {user.blogs.map(blog => (
          <li key={blog.id}>{blog.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default User;
