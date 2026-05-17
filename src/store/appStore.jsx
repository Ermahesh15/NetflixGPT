import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./userSlice";
import movieReducer from "./movieSlice";
import tvSeriesReducer from "./tvSeriesSlice";
import searchResultsReducer from "./searchResultsSlice";

const appStore = configureStore({
  reducer: {
    user: useReducer,
    movies: movieReducer,
    tvSeries: tvSeriesReducer,
    searchResults: searchResultsReducer,
  },
});
export default appStore;
