import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <section className="min-h-[calc(100vh-160px)] flex items-center justify-center px-6 py-12 text-white bg-[#141414] bg-[radial-gradient(circle_at_top,_rgba(229,9,20,0.18),_transparent_35%),radial-gradient(circle_at_80%_20%,_rgba(255,255,255,0.08),_transparent_18%),#141414]">
      <div className="w-full max-w-3xl px-10 py-12 rounded-[1.5rem] border border-white/10 bg-[#121212]/95 shadow-[0_32px_80px_rgba(0,0,0,0.55)] backdrop-blur-[18px] text-center">
        <div className="mb-4 text-4xl font-black tracking-[0.5rem] text-[#e50914]">
          NETFLIX
        </div>
        <h1 className="m-0 text-[clamp(4rem,10vw,7rem)] leading-[0.9] font-black tracking-[0.12em] text-white drop-shadow-[0_20px_40px_rgba(0,0,0,0.35)]">
          404
        </h1>
        <p className="mx-auto mt-6 mb-8 max-w-3xl text-base leading-8 text-[#e5e5e5]">
          The page you are looking for can't be found. Let's get you back to the
          binge-worthy stuff.
        </p>
        <p className="mb-8 text-sm leading-7 text-white/70">
          If you entered a URL manually, double-check the address and try again.
        </p>
        <Link
          to="/home"
          className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#e50914] text-sm font-black uppercase tracking-[0.08em] text-white transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#ff1414] hover:shadow-[0_18px_30px_rgba(229,9,20,0.35)]"
        >
          Go Home
        </Link>
      </div>
    </section>
  );
}
