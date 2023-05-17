import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const COV_URL =
  // "https://newsapi.org/v2/everything?q=Covid&sortBy=popularity&apiKey=5af2188c4b8e4985a3fe7dbde2b3b6be";
  `https://newsapi.org/v2/everything?q=Covid&sortBy=popularity&apiKey=${process.env.REACT_APP_API_KEY}`;
const initialState = {
  covNews: [],
};

export const fetchCovNews = createAsyncThunk(
  "covNews/fetchCovNews",
  async () => {
    const response = await axios.get(COV_URL);
    return response.data.articles;
  }
);

export const covNewsSlice = createSlice({
  name: "covNews",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCovNews.pending);
    builder.addCase(fetchCovNews.fulfilled, (state, { payload }) => {
      state.covNews = payload;
    });
    builder.addCase(fetchCovNews.rejected);
  },
});

export default covNewsSlice.reducer;
