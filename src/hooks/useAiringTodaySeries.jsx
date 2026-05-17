import { useEffect } from "react";
import { API_OPTIONS, seriesURL } from "../utils/constant";
import { addAiringTodaySeries } from "../store/tvSeriesSlice";
import { useDispatch, useSelector } from "react-redux";

function useAiringTodaySeries() {
  const dispatch = useDispatch();

  const airingTodaySeries = useSelector(
    (store) => store.tvSeries.airingTodaySeries
  );

  useEffect(() => {
    if (airingTodaySeries?.length > 0) return;

    async function fetchSeries() {
      try {
        const response = await fetch(
          `${seriesURL}/airing_today?language=en-US&page=1`,
          API_OPTIONS
        );

        const data = await response.json();

        dispatch(addAiringTodaySeries(data.results));
      } catch (error) {
        console.error("Failed to fetch airing today series:", error);
      }
    }

    fetchSeries();
  }, [dispatch, airingTodaySeries]);
}

export default useAiringTodaySeries;