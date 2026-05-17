import { useState } from "react";
import { cardImageBaseUrl } from "../utils/constant";
import MovieDetailModal from "./MovieDetailModal";

export default function MovieCard({ movie }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const posterUrl = `${cardImageBaseUrl}w500${movie.backdrop_path}`;
  if (!movie.backdrop_path) {
    return null;
  }

  return (
    <>
      <div
        className="relative w-48 h-72 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-[#111] shadow-[0_20px_75px_rgba(0,0,0,0.45)] transition-transform duration-300 ease-out hover:scale-105 hover:z-10"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={posterUrl}
          alt={movie?.title || movie?.name || "Movie"}
          className="w-full h-full object-cover"
        />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/90 via-black/60 to-transparent" />

        {isHovered && (
          <div className="absolute inset-0 bg-black/80 flex flex-col justify-end p-4 transition-opacity duration-300">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="cursor-pointer absolute top-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-black transition hover:bg-white"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>

            <div className="text-white">
              <h3 className="font-semibold text-sm mb-1 line-clamp-2">
                {movie?.title || movie?.name || "Movie Title"}
              </h3>
              <div className="flex flex-wrap items-center gap-2 text-[11px] text-gray-300 mb-2">
                {movie?.release_date && (
                  <span className="px-2 py-1 rounded bg-white/5">
                    {new Date(movie.release_date).getFullYear()}
                  </span>
                )}
                {movie?.vote_average && (
                  <span className="px-2 py-1 rounded bg-red-600 text-white">
                    {movie.vote_average?.toFixed(1)}
                  </span>
                )}
              </div>
              <p className="text-[11px] text-gray-300 leading-5 line-clamp-3">
                {movie?.overview || "An exciting movie you won't want to miss."}
              </p>
            </div>
          </div>
        )}
      </div>

      {isModalOpen && (
        <MovieDetailModal movie={movie} onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
}
