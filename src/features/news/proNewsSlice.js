import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  proNews: [],
};

export const proNewsSlice = createSlice({
  name: "proNews",
  initialState,
  reducers: {
    addProNews: (state, { payload }) => {
      state.proNews = payload;
    },
  },
  extraReducers: {}
});

export const { addProNews } = proNewsSlice.actions;
export const getAllProNews = (state) => state.programNews.proNews;
export default proNewsSlice.reducer;
