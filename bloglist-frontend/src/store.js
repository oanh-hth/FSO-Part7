import { configureStore } from "@reduxjs/toolkit";
import notificationReducer from "./reducers/notificationReducer";
import loginReducer from "./reducers/loginReducer";
import blogReducer from "./reducers/blogReducer";
import userReducer from "./reducers/userReducer";

const store = configureStore({
  reducer: {
    notification: notificationReducer,
    loginUser: loginReducer,
    blogs: blogReducer,
    users: userReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
