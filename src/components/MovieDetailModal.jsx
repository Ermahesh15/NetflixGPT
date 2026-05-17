import { createPortal } from "react-dom";
import { cardImageBaseUrl } from "../utils/constant";

export default function MovieDetailModal({ movie, onClose }) {
  const imageUrl = movie?.backdrop_path
    ? `${cardImageBaseUrl}w780${movie.backdrop_path}`
    : "https://via.placeholder.com/780x440?text=No+Image";

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 sm:p-6">
      <div className="w-full max-w-6xl overflow-hidden rounded-4xl bg-[#081018] shadow-[0_30px_80px_rgba(0,0,0,0.8)] ring-1 ring-white/10">
        <div className="flex flex-col gap-5 lg:flex-row relative">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close movie details"
            className="cursor-pointer absolute right-4 top-4 rounded-full bg-black/70 px-3 py-2 text-white transition hover:bg-black"
          >
            ✕
          </button>
          <div className="h-72 lg:h-130 lg:w-2/5">
            <img
              src={imageUrl}
              alt={movie?.title || movie?.name || "Movie detail"}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-1 flex-col justify-between gap-6 p-6 text-slate-100 lg:p-8">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-red-600/90">
                Details
              </p>
              <h2 className="mt-4 text-3xl font-black text-white">
                {movie?.title || movie?.name || "Untitled"}
              </h2>

              <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-300">
                {movie?.release_date && (
                  <span className="rounded-full bg-white/5 px-3 py-1">
                    {new Date(movie.release_date).getFullYear()}
                  </span>
                )}
                {movie?.original_language && (
                  <span className="rounded-full bg-white/5 px-3 py-1 uppercase">
                    {movie.original_language}
                  </span>
                )}
                {movie?.vote_average && (
                  <span className="rounded-full bg-red-600 px-3 py-1 text-white">
                    {movie.vote_average.toFixed(1)} rating
                  </span>
                )}
              </div>

              <div className="mt-6 space-y-5 text-sm leading-7 text-slate-300">
                <p>
                  {movie?.overview || "No overview available for this title."}
                </p>

                {movie?.genre_names && movie.genre_names.length > 0 ? (
                  <p>
                    <span className="font-semibold text-slate-100">
                      Genres:{" "}
                    </span>
                    {movie.genre_names.join(", ")}
                  </p>
                ) : null}

                {movie?.vote_count != null ? (
                  <p>
                    <span className="font-semibold text-slate-100">
                      Votes:{" "}
                    </span>
                    {movie.vote_count.toLocaleString()}
                  </p>
                ) : null}
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <button className="rounded-full bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-500">
                Watch trailer
              </button>
              <button className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-slate-200 transition hover:border-red-500">
                Add to list
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
