import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./context/userSlice"

export const store = configureStore({
  reducer: {
    userReducer
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
