import { useSelector } from "react-redux";
import HomepageBanner from "../components/HomepageBanner";
import HomepageList from "../components/HomepageList";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useNowPlayingMovies from "../hooks/usenowPlayingMovies";

export default function Home() {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  const movies = useSelector((store) => store.movies.nowPlayingMovies);
  if (movies.length === 0) return;
  const mainMovie = movies[0];
  return (
    <>
      <HomepageBanner movie={mainMovie} />
      <HomepageList />
    </>
  );
}
