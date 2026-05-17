import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { API_OPTIONS, MoviesURL } from "../utils/constant";
import { addPopularMovies } from "../store/movieSlice";

function usePopularMovies() {
  const dispatch = useDispatch();

  const popularMovies = useSelector(
    (store) => store.movies.popularMovies
  );

  useEffect(() => {
    // Prevent unnecessary API calls
    if (popularMovies?.length > 0) return;

    async function fetchMovies() {
      try {
        const response = await fetch(
          `${MoviesURL}/popular?language=en-US&page=1`,
          API_OPTIONS
        );

        const data = await response.json();

        dispatch(addPopularMovies(data.results));
      } catch (error) {
        console.error("Failed to fetch popular movies:", error);
      }
    }

    fetchMovies();
  }, [dispatch, popularMovies]);
}

export default usePopularMovies;