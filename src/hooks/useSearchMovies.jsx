import { API_OPTIONS, searchMoviesURL } from "../utils/constant";

export default function useSearchMovies() {
  async function searchMovie(movie) {
    try {
      const response = await fetch(
        `${searchMoviesURL}?query=${movie}&include_adult=false&language=en-US&page=1`,
        API_OPTIONS,
      );

      if (!response.ok) {
        throw new Error("Failed to fetch movie");
      }

      const data = await response.json();

      return data.results;
    } catch (error) {
      console.error("Error searching movie:", error);

      return [];
    }
  }

  return { searchMovie };
}
