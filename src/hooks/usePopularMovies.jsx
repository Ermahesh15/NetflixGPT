import { useEffect } from "react";
import { API_OPTIONS, MoviesURL } from "../utils/constant";
import { addPopularMovies } from "../store/movieSlice";
import { useDispatch } from "react-redux";

function usePopularMovies() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchMovies() {
       const response = await fetch(
        `${MoviesURL}/popular?language=en-US&page=1`,
        API_OPTIONS,
      );
      const data = await response.json();
      dispatch(addPopularMovies(data.results));
    }
    fetchMovies();
  }, []);
}

export default usePopularMovies;
