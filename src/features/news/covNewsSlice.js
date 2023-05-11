import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// const COV_URL = `https://newsapi.org/v2/everything?q=Covid&from=2023-04-11&sortBy=popularity&apikey=${process.env.REACT_APP_API_KEY}`;
const COV_URL = `https://newsapi.org/v2/everything?q=Covid&from=2023-04-11&sortBy=popularity&apikey=c27b1dc48f0c4735b6cad3758ea63b36`;

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
  extraReducers: {
    [fetchCovNews.pending]: () => console.log("pending"),
    [fetchCovNews.fulfilled]: (state, { payload }) => {
      return { ...state, covNews: payload };
    },
    [fetchCovNews.rejected]: () => console.log("pending"),
  },
});

export default covNewsSlice.reducer;
