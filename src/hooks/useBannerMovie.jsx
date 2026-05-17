import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { MoviesURL, API_OPTIONS } from "../utils/constant";
import { addBannerMovieTrailerKey } from "../store/movieSlice";

export default function useBannerMovie(id) {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchMovie() {
      try {
        const response = await fetch(`${MoviesURL}/${id}/videos`, API_OPTIONS);
        
        if (!response.ok) {
          throw new Error("Failed to fetch trailer videos");
        }

        console.log(`${MoviesURL}/${id}/videos`);

        const data = await response.json();

        const trailer = data.results.find((video) => video.type === "Trailer");

        if (trailer) {
          dispatch(addBannerMovieTrailerKey(trailer.key));
        }
      } catch (error) {
        console.error("Error fetching trailer:", error);
      }
    }

    if (id) {
      fetchMovie();
    }
  }, [dispatch, id]);
}
