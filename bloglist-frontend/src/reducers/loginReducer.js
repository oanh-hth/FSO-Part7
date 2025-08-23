import { createSlice } from "@reduxjs/toolkit";
import blogService from "../services/blogs";
import loginService from "../services/login";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    setLoginUser(state, action) {
      return action.payload;
    },
  },
});

export const { setLoginUser } = userSlice.actions;
export default userSlice.reducer;

export const initializeUser = () => {
  return async dispatch => {
    const loggedUserJSON = window.localStorage.getItem("loggedBlogAppUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      dispatch(setLoginUser(user));
      blogService.setToken(user.token);
    }
  };
};

export const logoutUser = () => {
  return async dispatch => {
    window.localStorage.removeItem("loggedBlogAppUser");
    dispatch(setLoginUser(null));
  };
};

export const loginUser = (username, password) => {
  return async dispatch => {
    const user = await loginService.login({
      username,
      password,
    });
    dispatch(setLoginUser(user));
    window.localStorage.setItem("loggedBlogAppUser", JSON.stringify(user));
    blogService.setToken(user.token);
  };
};
