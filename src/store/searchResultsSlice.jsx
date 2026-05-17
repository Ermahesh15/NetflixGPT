import { createSlice } from "@reduxjs/toolkit";

const searchResultsSlice = createSlice({
  name: "searchResults",
  initialState: {
    loading: false,
    moviesNames: null,
    moviesLists: null,
  },
  reducers: {
    setMoviesResults: (state, action) => {
      state.moviesNames = action.payload.moviesNames;
      state.moviesLists = action.payload.moviesLists;
    },

    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setMoviesResults, setLoading } = searchResultsSlice.actions;
export default searchResultsSlice.reducer;
