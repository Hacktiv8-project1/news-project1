import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    results: [],
    status: "idle",
    error: null,
  },
  reducers: {
    searchPending: (state) => {
      state.status = "loading";
    },
    searchSuccess: (state, action) => {
      state.status = "succeeded";
      state.results = action.payload;
    },
    searchFailed: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export const fetchSearchResults = createAsyncThunk(
  "search/fetchSearchResults",
  async (query) => {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=${query}&apiKey=${process.env.REACT_APP_API_KEY}`
    );
    return response.data.articles;
  }
);

export const { searchPending, searchSuccess, searchFailed } =
  searchSlice.actions;

export default searchSlice.reducer;
