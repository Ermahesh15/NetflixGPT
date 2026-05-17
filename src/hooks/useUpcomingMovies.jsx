import { useEffect } from "react";
import { API_OPTIONS, MoviesURL } from "../utils/constant";
import { addUpcomingMovies } from "../store/movieSlice";
import { useDispatch } from "react-redux";

function useUpcomingMovies() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(
        `${MoviesURL}/upcoming?language=en-US&page=1`,
        API_OPTIONS,
      );
      const data = await response.json();
      dispatch(addUpcomingMovies(data.results));
    }
    fetchMovies();
  }, [dispatch]);
}

export default useUpcomingMovies;
