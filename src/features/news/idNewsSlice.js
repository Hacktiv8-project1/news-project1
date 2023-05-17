import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const ID_URL =
  // "https://newsapi.org/v2/top-headlines?country=id&apiKey=5af2188c4b8e4985a3fe7dbde2b3b6be";
  `https://newsapi.org/v2/top-headlines?country=id&apiKey=${process.env.REACT_APP_API_KEY}`;

const initialState = {
  idNews: [],
};

export const fetchIdNews = createAsyncThunk("idNews/fetchIdNews", async () => {
  const response = await axios.get(ID_URL);
  return response.data.articles;
});

export const idNewsSlice = createSlice({
  name: "idNews",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchIdNews.pending);
    builder.addCase(fetchIdNews.fulfilled, (state, { payload }) => {
      state.idNews = payload;
    });
    builder.addCase(fetchIdNews.rejected);
  },
});

export default idNewsSlice.reducer;
