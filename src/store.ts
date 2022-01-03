import { configureStore } from "@reduxjs/toolkit";
import RootReducer from "./rootSlice";

const store = configureStore({
  reducer: {
    RootReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
