import { useState, useEffect, useRef } from "react";
import Blog from "./components/Blog";
import LoginForm from "./components/LoginForm";
import BlogForm from "./components/BlogForm";
import { useSelector, useDispatch } from "react-redux";
import { setNotificationWithTimeout } from "./reducers/notificationReducer";
import Notification from "./components/Notification";
import Togglable from "./components/Togglable";
import "./index.css";
import { loginUser, logoutUser, initializeUser } from "./reducers/loginReducer";
import {
  initializeBlogs,
  createBlog,
  likeBlog,
  removeBlog,
  commentBlog,
} from "./reducers/blogReducer";
import { getUsers } from "./reducers/userReducer";
import { Link, Route, Routes, useMatch, useNavigate } from "react-router-dom";
import Users from "./components/Users";
import User from "./components/User";
import BlogList from "./components/BlogList";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const notification = useSelector(state => state.notification);
  const user = useSelector(state => state.loginUser);
  const blogs = useSelector(state => state.blogs);
  const users = useSelector(state => state.users);

  useEffect(() => {
    dispatch(initializeUser());
    dispatch(initializeBlogs());
    dispatch(getUsers());
  }, []);

  const navigate = useNavigate();

  const match = useMatch("/users/:id");
  const matchUser = match
    ? users.find(user => user.id === match.params.id)
    : null;

  const matchBlog = useMatch("/blogs/:id");
  const matchBlogObject = matchBlog
    ? blogs.find(blog => blog.id === matchBlog.params.id)
    : null;

  const handleLogin = async e => {
    e.preventDefault();
    try {
      dispatch(loginUser(username, password));
      setUsername("");
      setPassword("");
    } catch (exception) {
      dispatch(setNotificationWithTimeout("Wrong username or password", true));
    }
  };

  const blogFormRef = useRef();

  const addNewBlog = async blog => {
    try {
      dispatch(createBlog(blog));
      await blogFormRef.current.toggleVisibility();
      dispatch(
        setNotificationWithTimeout(
          `a new blog ${blog.title} by ${blog.author} added`,
          false
        )
      );
    } catch (exception) {
      dispatch(setNotificationWithTimeout("Invalid blog", true));
    }
  };

  const handleLike = async blog => {
    try {
      dispatch(likeBlog(blog));
    } catch (exception) {
      setNotificationWithTimeout("Something went wrong", true);
    }
  };

  const handleDeleteBlog = async blog => {
    const confirm = window.confirm(
      `Remove blog ${blog.title} by ${blog.author}`
    );
    if (!confirm) return;
    try {
      dispatch(removeBlog(blog.id));
      navigate("/blogs");
    } catch (exception) {
      setNotificationWithTimeout("Cannot Delete", true);
    }
  };

  const handleCommentBlog = async (id, comment) => {
    try {
      dispatch(commentBlog(id, comment));
    } catch (exception) {
      setNotificationWithTimeout("Something went wrong", true);
    }
  };

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  if (user === null) {
    return (
      <div>
        <h2>log in to application</h2>
        <Notification {...notification} />
        <LoginForm
          onSubmit={handleLogin}
          notification={notification}
          username={username}
          password={password}
          handleChangeUsername={e => setUsername(e.target.value)}
          handleChangePassword={e => setPassword(e.target.value)}
        />
      </div>
    );
  }

  return (
    <div>
      <div>
        <Link to="/blogs">blogs</Link>
        <Link to="/users">users</Link>
        <span>
          {user.username} logged in{" "}
          <button onClick={handleLogout}>logout</button>
        </span>
      </div>
      <h2>Blog App</h2>

      <Routes>
        <Route path="/users" element={<Users users={users} />} />
        <Route path="/users/:id" element={<User user={matchUser} />} />
        <Route
          path="/blogs/:id"
          element={
            <Blog
              blog={matchBlogObject}
              onLike={handleLike}
              onDelete={handleDeleteBlog}
              user={user.username}
              onComment={handleCommentBlog}
            />
          }
        />
        <Route
          path="/blogs"
          element={
            <>
              <Notification {...notification} />

              <Togglable buttonLabel="create new blog" ref={blogFormRef}>
                <BlogForm createBlog={addNewBlog} />
              </Togglable>
              <BlogList blogs={blogs} />
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
