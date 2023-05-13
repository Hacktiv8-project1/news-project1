import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const PRO_URL =
  // "https://newsapi.org/v2/everything?q=Progaming&sortBy=popularity&apiKey=5af2188c4b8e4985a3fe7dbde2b3b6be";
  `https://newsapi.org/v2/everything?q=Progaming&sortBy=popularity&apiKey=${process.env.REACT_APP_API_KEY}`;

const initialState = {
  proNews: [],
};

export const fetchProNews = createAsyncThunk(
  "proNews/fetchProNews",
  async () => {
    const response = await axios.get(PRO_URL);
    return response.data.articles;
  }
);

export const proNewsSlice = createSlice({
  name: "proNews",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProNews.pending);
    builder.addCase(fetchProNews.fulfilled, (state, { payload }) => {
      state.proNews = payload;
    });
    builder.addCase(fetchProNews.rejected);
  },
});

export default proNewsSlice.reducer;
