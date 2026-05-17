import { useEffect } from "react";
import { API_OPTIONS, seriesURL } from "../utils/constant";
import { addTopRatedSeries } from "../store/tvSeriesSlice";
import { useDispatch, useSelector } from "react-redux";

function useTopRatedSeries() {
  const dispatch = useDispatch();
  const topRatedSeries = useSelector((store) => store.tvSeries.topRatedSeries);

  useEffect(() => {
    if (topRatedSeries?.length > 0) return;
    async function fetchMovies() {
      const response = await fetch(
        `${seriesURL}/top_rated?language=en-US&page=1`,
        API_OPTIONS,
      );
      const data = await response.json();
      dispatch(addTopRatedSeries(data.results));
    }
    fetchMovies();
  }, [dispatch]);
}

export default useTopRatedSeries;
