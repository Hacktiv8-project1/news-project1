import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  saved: localStorage.getItem("saved")
    ? JSON.parse(localStorage.getItem("saved"))
    : [],
};

export const savedSlice = createSlice({
  name: "saved",
  initialState,
  reducers: {
    saveNews: (state, action) => {
      state.saved.push(action.payload);
      localStorage.setItem("saved", JSON.stringify(state.saved));
    },

    unSaveNews: (state, action) => {
      state.saved = state.saved?.filter(
        (item) => item.title !== action.payload?.title
      );
      localStorage.setItem("saved", JSON.stringify(state.saved));
    },
  },
});

export const { saveNews, unSaveNews, add } = savedSlice.actions;
export default savedSlice.reducer;
