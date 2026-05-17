export default function Footer() {
  return (
    <footer className="bg-[#141414] py-5 text-sm text-gray-400">
      <div className="mx-auto flex max-w-8xl items-center justify-between px-6 sm:px-10">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-lg font-black text-white">
            N
          </div>
          <span className="text-lg font-semibold text-white">NetflixGPT</span>
        </div>

        <p className="text-xs text-slate-400 sm:text-sm">© {new Date().getFullYear()} NetflixGPT. All rights reserved.</p>
      </div>
    </footer>
  );
}
