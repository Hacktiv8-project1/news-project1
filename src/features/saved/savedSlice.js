import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  saved: localStorage.getItem("saved")
    ? JSON.parse(localStorage.getItem("saved"))
    : [],
  // saved: [],
};

export const savedSlice = createSlice({
  name: "saved",
  initialState,
  reducers: {
    add: (state, action) => {
      // if alerdey exist
      let existsItem = state.saved?.findIndex(
        (item) => item.title === action.payload?.title
      );

      if (existsItem >= 0) {
        // console.log("sudah ada")
        let removeItem = state.saved?.filter(
          (item) => item.title !== action.payload?.title
        );
        state.saved = removeItem;
        localStorage.setItem("saved", JSON.stringify(state.saved));
      } else {
        // add
        state.saved.push(action.payload);
        localStorage.setItem("saved", JSON.stringify(state.saved));
      }
    },
  },
  extraReducers: {},
});

export const { add } = savedSlice.actions;
export const getAllSaved = (state) => state.save.saved;
export default savedSlice.reducer;
