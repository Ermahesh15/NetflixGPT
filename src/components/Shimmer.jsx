export default function Shimmer() {
  const sectionRows = [1, 2, 3];

  return (
    <div className="rounded-[1.75rem] border border-white/10 bg-[#07080f]/95 p-6 shadow-[0_20px_70px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-3">
          <div className="h-8 w-52 rounded-full bg-white/10 animate-pulse" />
          <div className="h-4 w-32 rounded-full bg-white/10 animate-pulse" />
        </div>
        <div className="h-8 w-28 rounded-full bg-white/10 animate-pulse" />
      </div>

      <div className="space-y-8">
        {sectionRows.map((section) => (
          <div key={section} className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-4">
            <div className="h-5 w-1/4 rounded-full bg-white/10 animate-pulse" />
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6 xl:grid-cols-7">
              {Array.from({ length: 7 }).map((_, index) => (
                <div
                  key={index}
                  className="h-44 rounded-3xl bg-white/10 shadow-inner shadow-black/20 animate-pulse"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
