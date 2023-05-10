import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const ID_URL =
  "https://newsapi.org/v2/top-headlines?country=id&apiKey=c27b1dc48f0c4735b6cad3758ea63b36";

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
  extraReducers: {
    [fetchIdNews.pending]: () => console.log(),
    [fetchIdNews.fulfilled]: (state, { payload }) => {
      return { ...state, idNews: payload };
    },
    [fetchIdNews.rejected]: () => console.log("pending"),
  },
});

export default idNewsSlice.reducer;
