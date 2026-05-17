import { useEffect } from "react";
import { API_OPTIONS, seriesURL } from "../utils/constant";
import { addPopularSeries } from "../store/tvSeriesSlice";
import { useDispatch } from "react-redux";

function usePopularSeries() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(
        `${seriesURL}/popular?language=en-US&page=1`,
        API_OPTIONS,
      );
      const data = await response.json();
      dispatch(addPopularSeries(data.results));
    }
    fetchMovies();
  }, [dispatch]);
}

export default usePopularSeries;
