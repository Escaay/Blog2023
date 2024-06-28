import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ifOpen: true,
};

export const floatNav = createSlice({
  name: "floatNav",
  initialState,
  reducers: {
    open: () => {
      console.log("open");
      return { ifOpen: true };
    },
    close: () => {
      console.log("close");
      return { ifOpen: false };
    },
  },
});

// Action creators are generated for each case reducer function
export const { open, close } = floatNav.actions;

export default floatNav.reducer;
