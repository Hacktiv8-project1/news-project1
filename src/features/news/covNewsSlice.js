import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  covNews: [],
};

export const covNewsSlice = createSlice({
  name: "covNews",
  initialState,
  reducers: {
    addCovNews: (state, { payload }) => {
      state.covNews = payload;
    },
  },
});

export const { addCovNews } = covNewsSlice.actions;
export const getAllCovNews = (state) => state.covidNews.covNews;
export default covNewsSlice.reducer;
