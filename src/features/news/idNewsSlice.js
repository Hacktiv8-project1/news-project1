import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const ID_URL = `https://newsapi.org/v2/top-headlines?country=id&apiKey=${process.env.REACT_APP_API_KEY}`;

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
