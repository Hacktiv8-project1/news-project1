import { configureStore } from "@reduxjs/toolkit";
import covNewsReducer from "../features/news/covNewsSlice";
import idNewsReducer from "../features/news/idNewsSlice";
import proNewsReducer from "../features/news/proNewsSlice";
import savedReducer from "../features/saved/savedSlice";
import searchReducer from "../features/search/searchSlice";

export const store = configureStore({
  reducer: {
    indNews: idNewsReducer,
    covidNews: covNewsReducer,
    programNews: proNewsReducer,
    save: savedReducer,
    search: searchReducer,
  },
});
