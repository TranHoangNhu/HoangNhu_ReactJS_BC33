import { configureStore } from "@reduxjs/toolkit";
import sVReducer from "./Reducer/LayThongTinSVReducer";

export const store = configureStore({
  reducer: {
    sVReducer,
  },
});
