export default function Footer() {
  return (
    <footer className="bg-[#141414] py-5 text-sm text-gray-400">
      <div className="mx-auto flex max-w-8xl items-center justify-between px-6 sm:px-10">
        <div class="flex items-center">
          <div class="text-3xl font-black tracking-[0.35em] text-red-600">
            NETFLIX
          </div>
        </div>

        <p className="text-xs text-slate-400 sm:text-sm">
          © {new Date().getFullYear()} NetflixGPT. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
