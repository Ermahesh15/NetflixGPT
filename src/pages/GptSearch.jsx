import { useSelector } from "react-redux";
import GptSearchInput from "../components/GptSearchInput";
import GptSearchResults from "../components/GptSearchResults";

export default function GptSearch() {
  const searchResults = useSelector((store) => store.searchResults);
  const { loading, moviesNames } = searchResults;

  return (
    <main className="min-h-screen bg-[#050508] text-white">
      <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-10 min-h-screen flex justify-center flex-col">
        <>
          {!moviesNames && !loading && (
            <div className="text-center mb-4">
              <h1 className="text-3xl font-black text-white sm:text-3xl">
                Where should we begin?
              </h1>
              <p className="mt-2 text-sm leading-7 text-slate-300 sm:text-base">
                Use the prompt input to explore movie and series ideas,
                streaming recommendations, and Netflix insights.
              </p>
            </div>
          )}

          <div className="space-y-6">
            <GptSearchResults />
            <GptSearchInput />
          </div>
        </>
      </div>
    </main>
  );
}
