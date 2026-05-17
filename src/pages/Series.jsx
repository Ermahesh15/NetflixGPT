import { useSelector } from "react-redux";
import useAiringTodaySeries from "../hooks/useAiringTodaySeries";
import useOnAirSeries from "../hooks/useOnAirSeries";
import useTopRatedSeries from "../hooks/useTopRatedSeries";
import usePopularSeries from "../hooks/usePopularSeries";
import MovieList from "../components/MovieList";

export default function Series() {
  const tvSeries = useSelector((store) => store.tvSeries);
  useAiringTodaySeries();
  useOnAirSeries();
  usePopularSeries();
  useTopRatedSeries();
  return (
    <main className="min-h-screen bg-[#060606] text-white">
      <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-12">
        <MovieList title="Airing Today" movies={tvSeries.airingTodaySeries} />
        <MovieList title="On The Air" movies={tvSeries.onTheAirSeries} />
        <MovieList title="Popular Series" movies={tvSeries.popularSeries} />
        <MovieList title="Top Rated Series" movies={tvSeries.topRatedSeries} />
      </div>
    </main>
  );
}
