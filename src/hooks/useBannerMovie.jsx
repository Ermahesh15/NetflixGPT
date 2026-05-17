import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { MoviesURL, API_OPTIONS } from "../utils/constant";
import { addBannerMovieTrailerKey } from "../store/movieSlice";

export default function useBannerMovie(id) {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchMovieTrailer() {
      try {
        const response = await fetch(
          `${MoviesURL}/${id}/videos?language=en-US`,
          API_OPTIONS,
        );

        if (!response.ok) {
          throw new Error("Failed to fetch trailer videos");
        }

        const data = await response.json();

        console.log(data);

        // Prefer official trailer
        const trailer =
          data.results.find(
            (video) => video.type === "Trailer" && video.site === "YouTube",
          ) || data.results[0];

        if (trailer) {
          dispatch(addBannerMovieTrailerKey(trailer.key));
        }
      } catch (error) {
        console.error("Error fetching trailer:", error);
      }
    }

    if (id) {
      fetchMovieTrailer();
    }
  }, [dispatch, id]);
}
