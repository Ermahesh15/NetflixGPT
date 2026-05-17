import { useSelector } from "react-redux";
import useBannerMovie from "../hooks/useBannerMovie";

export default function HomepageBanner({ movie }) {
  const { title, overview, vote_average, id } = movie;

  useBannerMovie(id);

  const trailerKey = useSelector(
    (store) => store.movies.bannerMovieTrailerKey,
  );

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Video */}
      {trailerKey ? (
        <div className="absolute inset-0 overflow-hidden">
          <iframe
            className="absolute top-1/2 left-1/2 
                       h-screen w-screen 
                       min-h-full min-w-full
                       -translate-x-1/2 -translate-y-1/2
                       scale-150 pointer-events-none"
            src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerKey}&modestbranding=1&rel=0`}
            title="Movie Trailer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>
      )}

      {/* Overlay Gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

      {/* Banner Content */}
      <div className="absolute inset-0 flex items-center px-8 lg:px-16">
        <div className="max-w-2xl">
          {/* Title */}
          <h1 className="mb-4 text-5xl font-black tracking-tight text-white drop-shadow-lg lg:text-7xl">
            {title || "Movie Title"}
          </h1>

          {/* Match Percentage */}
          <div className="mb-6 flex items-center gap-4 text-sm text-gray-200 lg:text-base">
            {vote_average && (
              <span className="rounded border border-gray-400 px-3 py-1">
                {Math.round(vote_average * 10)}% Match
              </span>
            )}
          </div>

          {/* Overview */}
          <p className="mb-8 max-w-lg line-clamp-3 text-base leading-relaxed text-gray-300 lg:text-lg">
            {overview ||
              "Discover an amazing story that will keep you hooked from start to finish."}
          </p>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            {/* Play Button */}
            <button className="flex items-center gap-2 rounded bg-white px-8 py-3 font-bold text-black transition duration-200 ease-out hover:bg-white/80 hover:shadow-lg">
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
              Play
            </button>

            {/* More Info Button */}
            <button className="flex items-center gap-2 rounded bg-gray-600/80 px-8 py-3 font-bold text-white backdrop-blur transition duration-200 ease-out hover:bg-gray-500 hover:shadow-lg">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}