import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slice/authSlice";

export const store = configureStore({
  reducer: {
    
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>