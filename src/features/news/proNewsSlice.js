import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const PRO_URL = `https://newsapi.org/v2/everything?q=Progaming&from=2023-04-11&sortBy=popularity&apiKey=16d7589cf0574ceb98d7827cebba4d32`;

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
  reducers: {},
  extraReducers: {
    [fetchProNews.pending]: () => console.log("pending"),
    [fetchProNews.fulfilled]: (state, { payload }) => {
      console.log("fetch successfully");
      return { ...state, proNews: payload };
    },
    [fetchProNews.rejected]: () => console.log("rejected"),
  },
});

// export const { addProNews } = proNewsSlice.actions;
export const getAllProNews = (state) => state.programNews.proNews;
export default proNewsSlice.reducer;
