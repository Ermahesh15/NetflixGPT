import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { addNowPlayingMovies } from "../store/movieSlice";
import { API_OPTIONS, MoviesURL } from "../utils/constant";

function useNowPlayingMovies() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await fetch(
          `${MoviesURL}/now_playing?language=en-US&page=1`,
          API_OPTIONS,
        );

        if (!response.ok) {
          throw new Error("Failed to fetch movies");
        }

        const data = await response.json();

        dispatch(addNowPlayingMovies(data.results));
      } catch (error) {
        console.error(error);
      }
    }

    fetchMovies();
  }, [dispatch]);
}

export default useNowPlayingMovies;
