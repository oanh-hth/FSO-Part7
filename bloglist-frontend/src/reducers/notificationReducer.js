import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: null,
  isError: false,
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    setNotification(state, action) {
      state.message = action.payload.message;
      state.isError = action.payload.isError;
    },
  },
});

export const { setNotification } = notificationSlice.actions;
export default notificationSlice.reducer;

export const setNotificationWithTimeout = (message, isError) => {
  return async dispatch => {
    dispatch(setNotification({ message, isError }));
    setTimeout(() => {
      dispatch(setNotification({ message: null, isError: false }));
    }, 5000);
  };
};

export const clearNotification = () => {
  return async dispatch => {
    dispatch(setNotification({ message: null, isError: false }));
  };
};
