import { useSelector } from "react-redux";
import MovieList from "../components/MovieList";

export default function Movies() {
  const movies = useSelector((store) => store.movies);
  return (
    <main className="min-h-screen bg-[#060606] text-white">
      <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-12">
        <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
        <MovieList title="Popular Movies" movies={movies.popularMovies} />
        <MovieList title="Top Rated Movies" movies={movies.topRatedMovies} />
        <MovieList title="Upcoming Movies" movies={movies.upcomingMovies} />
      </div>
    </main>
  );
}
