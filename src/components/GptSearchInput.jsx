import { useState } from "react";

import useMovieRecommendations from "../hooks/useMovieRecommendations";
import useSearchMovies from "../hooks/useSearchMovies";
import { useDispatch } from "react-redux";
import { setMoviesResults, setLoading } from "../store/searchResultsSlice";

export default function GptSearchInput() {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const { getMovieRecommendations } = useMovieRecommendations();
  const { searchMovie } = useSearchMovies();

  async function handleSubmit(event) {
    event.preventDefault();
    dispatch(setLoading(true));
    const movies = await getMovieRecommendations(query);
    const promiseArray = movies.map((movie) => searchMovie(movie));
    const results = await Promise.all(promiseArray);
    dispatch(setMoviesResults({ moviesNames: movies, moviesLists: results }));
    dispatch(setLoading(false));
  }

  function handleClear() {
    setQuery("");
    dispatch(setMoviesResults({ moviesNames: null, moviesLists: null }));
  }

  return (
    <div className="rounded-[7px] border border-white/10 bg-white/5 p-4 shadow-[0_20px_70px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
      <form className="space-y-4" onSubmit={handleSubmit}>        
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          type="text"
          placeholder="e.g. Best Netflix originals for family movie night"
          className="w-full resize-none rounded-[7px] border border-white/10 bg-[#0f1720] px-4 py-4 text-sm text-slate-100 outline-none transition focus:border-white/20"
        />

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              type="submit"
              className="cursor-pointer inline-flex min-w-35 items-center justify-center rounded bg-red-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-600"
            >
              Search GPT
            </button>

            <button
              type="button"
              onClick={() => handleClear()}
              className="cursor-pointer inline-flex min-w-35 items-center justify-center rounded border border-white/10 bg-transparent px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-red-500 hover:text-white"
            >
              Clear
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
