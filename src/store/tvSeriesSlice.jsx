import { createSlice } from "@reduxjs/toolkit";

const tvSeriesSlice = createSlice({
  name: "tvSeries",
  initialState: {
    airingTodaySeries: [],
    onTheAirSeries: [],
    popularSeries: [],
    topRatedSeries: [],
  },

  reducers: {
    addAiringTodaySeries: (state, action) => {
      state.airingTodaySeries = action.payload;
    },

    addOnTheAirSeries: (state, action) => {
      state.onTheAirSeries = action.payload;
    },

    addPopularSeries: (state, action) => {
      state.popularSeries = action.payload;
    },

    addTopRatedSeries: (state, action) => {
      state.topRatedSeries = action.payload;
    },
  },
});

export const {
  addAiringTodaySeries,
  addOnTheAirSeries,
  addPopularSeries,
  addTopRatedSeries,
} = tvSeriesSlice.actions;

export default tvSeriesSlice.reducer;
