import { useEffect } from "react";
import { API_OPTIONS, MoviesURL } from "../utils/constant";
import { addTopRatedMovies } from "../store/movieSlice";
import { useDispatch } from "react-redux";

function useTopRatedMovies() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await fetch(
          `${MoviesURL}/top_rated?language=en-US&page=1`,
          API_OPTIONS,
        );

        if (!response.ok) {
          throw new Error("Failed to fetch movies");
        }
        const data = await response.json();
        dispatch(addTopRatedMovies(data.results));
      } catch (error) {
        console.error(error);
      }
    }
    fetchMovies();
  }, [dispatch]);
}

export default useTopRatedMovies;
