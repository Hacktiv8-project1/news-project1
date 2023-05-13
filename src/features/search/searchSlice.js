import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSearchResults = createAsyncThunk(
  "search/fetchSearchResults",
  async (query) => {
    const response = await axios.get(
      // `https://newsapi.org/v2/everything?q=${query}&apiKey=5af2188c4b8e4985a3fe7dbde2b3b6be`
      `https://newsapi.org/v2/everything?q=${query}&apiKey=${process.env.REACT_APP_API_KEY}`
    );
    return response.data.articles;
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState: {
    results: [],
    status: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSearchResults.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchSearchResults.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.results = action.payload;
    });
    builder.addCase(fetchSearchResults.rejected, (state, action) => {
      state.status = "failed";
    });
  },
});

export default searchSlice.reducer;
