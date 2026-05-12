export default function Header() {
  return (
    <header className="bg-[#141414]/90 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10">
        <div className="flex items-center gap-8">
          <div className="text-3xl font-black tracking-[0.35em] text-red-600">NETFLIX</div>
          <nav className="hidden gap-6 text-sm sm:flex">
            <a href="#home" className="transition hover:text-gray-200">Home</a>
            <a href="#tvshows" className="transition hover:text-gray-200">TV Shows</a>
            <a href="#movies" className="transition hover:text-gray-200">Movies</a>
            <a href="#latest" className="transition hover:text-gray-200">New & Popular</a>
            <a href="#mylist" className="transition hover:text-gray-200">My List</a>
          </nav>
        </div>

        <div className="flex items-center gap-4 text-sm">
          <button className="rounded border border-white/20 px-4 py-2 transition hover:border-white hover:text-white">
            Sign In
          </button>
          <button className="rounded bg-red-600 px-4 py-2 text-sm font-semibold transition hover:bg-red-700">
            Try Now
          </button>
        </div>
      </div>
    </header>
  )
}
