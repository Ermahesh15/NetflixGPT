const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer " + import.meta.env.VITE_TMDB_API_KEY,
  },
};

//Movies URL's
const MoviesURL = 'https://api.themoviedb.org/3/movie';

const searchMoviesURL = 'https://api.themoviedb.org/3/search/movie'

//TV Series URL's
const seriesURL = "https://api.themoviedb.org/3/tv";

// Images base URLs  

const thumbnailBaseUrl =
  "https://avatars.githubusercontent.com/u/176426480?v=4&size=64";


const cardImageBaseUrl = "https://image.tmdb.org/t/p/"


// Exporting all constants together for easier imports in other files

export { thumbnailBaseUrl, API_OPTIONS, MoviesURL, searchMoviesURL, seriesURL, cardImageBaseUrl };
