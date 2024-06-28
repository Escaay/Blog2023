import { configureStore } from "@reduxjs/toolkit";
import floatNav from "./floatNav.js";

export const store = configureStore({
  reducer: {
    floatNav: floatNav,
  },
});
