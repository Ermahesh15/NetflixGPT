import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import Shimmer from "./Shimmer";

export default function GptSearchResults() {
  const searchResults = useSelector((store) => store.searchResults);
  const { moviesNames, moviesLists, loading } = searchResults;

  if (loading) {
    return <Shimmer />;
  }

  if (!moviesNames) {
    return null;
  }

  return (
    <div className="rounded-[1.75rem] border border-white/10 bg-[#07080f]/95 p-6 shadow-[0_20px_70px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-2xl font-black text-white">Search results</h2>
        <div className="rounded-full bg-white/5 px-4 py-2 text-sm text-slate-300 ring-1 ring-white/10">
          {moviesNames?.length}{" "}
          {moviesNames?.length === 1 ? "result" : "results"}
        </div>
      </div>

      {moviesNames.map((movie, index) => (
        <MovieList key={movie} title={movie} movies={moviesLists[index]} />
      ))}
    </div>
  );
}
