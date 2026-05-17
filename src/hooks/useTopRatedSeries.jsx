import { useEffect } from "react";
import { API_OPTIONS, seriesURL } from "../utils/constant";
import { addTopRatedSeries } from "../store/tvSeriesSlice";
import { useDispatch } from "react-redux";

function useTopRatedSeries() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(
        `${seriesURL}/top_rated?language=en-US&page=1`,
        API_OPTIONS
      );
      const data = await response.json();
      dispatch(addTopRatedSeries(data.results));
    }
    fetchMovies();
  }, [dispatch]);
}

export default useTopRatedSeries;
