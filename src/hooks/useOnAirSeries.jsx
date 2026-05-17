import { useEffect } from "react";
import { API_OPTIONS, seriesURL } from "../utils/constant";
import { addOnTheAirSeries } from "../store/tvSeriesSlice";
import { useDispatch, useSelector } from "react-redux";

function useOnAirSeries() {
  const dispatch = useDispatch();
  const onTheAirSeries = useSelector((store) => store.tvSeries.onTheAirSeries);

  useEffect(() => {
    if (onTheAirSeries?.length > 0) return;
    async function fetchMovies() {
      const response = await fetch(
        `${seriesURL}/on_the_air?language=en-US&page=1`,
        API_OPTIONS,
      );
      const data = await response.json();
      dispatch(addOnTheAirSeries(data.results));
    }
    fetchMovies();
  }, [dispatch]);
}

export default useOnAirSeries;
