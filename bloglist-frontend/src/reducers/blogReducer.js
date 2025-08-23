import { createSlice } from "@reduxjs/toolkit";
import blogService from "../services/blogs";

const blogSlice = createSlice({
  name: "blogs",
  initialState: [],
  reducers: {
    setBlogs(state, action) {
      return action.payload;
    },
    create(state, action) {
      state.push(action.payload);
    },
    update(state, action) {
      return state
        .map(b => (b.id !== action.payload.id ? b : action.payload))
        .sort((a, b) => b.likes - a.likes);
    },
    remove(state, action) {
      return state.filter(b => b.id !== action.payload);
    },
  },
});

export const { setBlogs, create, update, remove } = blogSlice.actions;
export default blogSlice.reducer;

export const initializeBlogs = () => {
  return async dispatch => {
    const blogs = await blogService.getAll();
    dispatch(setBlogs(blogs));
  };
};

export const createBlog = newBlog => {
  return async dispatch => {
    const blog = await blogService.create(newBlog);
    dispatch(create(blog));
  };
};

export const removeBlog = id => {
  return async dispatch => {
    await blogService.remove(id);
    dispatch(remove(id));
  };
};

export const likeBlog = blog => {
  return async dispatch => {
    const updatedBlog = { ...blog, likes: blog.likes + 1 };
    const likedBlog = await blogService.update(blog.id, updatedBlog);
    dispatch(update(likedBlog));
  };
};

export const commentBlog = ({ id, comment }) => {
  return async dispatch => {
    const commentedBlog = await blogService.comment({ id, comment });
    dispatch(update(commentedBlog));
  };
};
