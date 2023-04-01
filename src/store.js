import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./CounterSlice";
import siteReducer from "./store/site";

export default configureStore({
  reducer: {
    counter: counterReducer,
    site: siteReducer,
  },
});
