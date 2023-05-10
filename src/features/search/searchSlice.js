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
      `https://newsapi.org/v2/everything?q=${query}&apiKey=5af2188c4b8e4985a3fe7dbde2b3b6be`
    );
    return response.data.articles;
  }
);

export const { searchPending, searchSuccess, searchFailed } =
  searchSlice.actions;

export default searchSlice.reducer;
