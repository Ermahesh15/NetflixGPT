import { useEffect } from "react";
import { API_OPTIONS, seriesURL } from "../utils/constant";
import { addAiringTodaySeries } from "../store/tvSeriesSlice";
import { useDispatch } from "react-redux";

function useAiringTodaySeries() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(
        `${seriesURL}/airing_today?language=en-US&page=1`,
        API_OPTIONS,
      );
      const data = await response.json();
      dispatch(addAiringTodaySeries(data.results));
    }
    fetchMovies();
  }, []);
}

export default useAiringTodaySeries;
