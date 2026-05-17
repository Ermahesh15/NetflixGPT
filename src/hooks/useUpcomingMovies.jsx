import { useEffect } from "react";
import { API_OPTIONS, MoviesURL } from "../utils/constant";
import { addUpcomingMovies } from "../store/movieSlice";
import { useDispatch, useSelector } from "react-redux";

function useUpcomingMovies() {
  const dispatch = useDispatch();
  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);

  useEffect(() => {
    async function fetchMovies() {
      if (upcomingMovies?.length > 0) return;
      const response = await fetch(
        `${MoviesURL}/upcoming?language=en-US&page=1`,
        API_OPTIONS,
      );
      const data = await response.json();
      dispatch(addUpcomingMovies(data.results));
    }
    fetchMovies();
  }, [dispatch, upcomingMovies]);
}

export default useUpcomingMovies;
