import MovieCard from "./MovieCard";

export default function MovieList({ title, movies }) {
  return (
    <section className="mb-5">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-lg font-bold text-white sm:text-2xl">{title}</h2>
      </div>

      <div className="-mx-2 overflow-x-auto pb-2 no-scrollbar" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
        <div className="flex gap-4 px-2">
          {movies?.slice(0, 18).map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </section>
  );
}
