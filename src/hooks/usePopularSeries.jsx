import { useEffect } from "react";
import { API_OPTIONS, seriesURL } from "../utils/constant";
import { addPopularSeries } from "../store/tvSeriesSlice";
import { useDispatch, useSelector } from "react-redux";

function usePopularSeries() {
  const dispatch = useDispatch();  
  const popularSeries = useSelector((store) => store.tvSeries.popularSeries);

  useEffect(() => {
    if (popularSeries?.length > 0) return;  
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
