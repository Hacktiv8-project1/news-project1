import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const ID_URL = `https://newsapi.org/v2/top-headlines?country=id&apiKey=${API_KEY}`;

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
  reducers: {},
  extraReducers: {
    [fetchIdNews.pending]: () => console.log("pending"),
    [fetchIdNews.fulfilled]: (state, { payload }) => {
      console.log("fetch successfully");
      return { ...state, idNews: payload };
    },
    [fetchIdNews.rejected]: () => console.log("rejected"),
  },
});

export const { addIdNews, setSearchTerm } = idNewsSlice.actions;
export const getAllIdNews = (state) => state.indNews.idNews;
export default idNewsSlice.reducer;
