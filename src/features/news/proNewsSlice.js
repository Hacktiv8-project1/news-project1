import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const PRO_URL = `https://newsapi.org/v2/everything?q=Progaming&from=2023-04-11&sortBy=popularity&apiKey=${process.env.REACT_APP_API_KEY}`;

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

  extraReducers: {
    [fetchProNews.pending]: () => console.log("pending"),
    [fetchProNews.fulfilled]: (state, { payload }) => {
      return { ...state, proNews: payload };
    },
    [fetchProNews.rejected]: () => console.log("pending"),
  },
});

export default proNewsSlice.reducer;
