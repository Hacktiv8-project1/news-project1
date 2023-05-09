import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const ID_URL =
  "https://newsapi.org/v2/top-headlines?country=id&apiKey=16d7589cf0574ceb98d7827cebba4d32";

const initialState = {
  idNews: [],
  searchTerm: "",
};

export const fetchIdNews = createAsyncThunk("idNews/fetchIdNews", async () => {
  const response = await axios.get(ID_URL);
  return response.data.articles;
});

export const idNewsSlice = createSlice({
  name: "idNews",
  initialState,
  reducers: {
    addIdNews: (state, { payload }) => {
      state.idNews = payload;
    },
    setSearchTerm: (state, { payload }) => {
      state.searchTerm = payload;
    },
  },
  extraReducers: {
    [fetchIdNews.pending]: () => console.log("pending"),
    [fetchIdNews.fulfilled]: (state, { payload }) => {
      console.log("fetch successfully");
      return { ...state, idNews: payload };
    },
    [fetchIdNews.rejected]: () => console.log("pending"),
  },
});

export const { addIdNews, setSearchTerm } = idNewsSlice.actions;
export const getAllIdNews = (state) => state.indNews.idNews;
export const getSearchTerm = (state) => state.indNews.searchTerm;
export default idNewsSlice.reducer;
