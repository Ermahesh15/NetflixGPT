import { useState } from "react";

export default function Login() {
  const [isSignIn, setIsSignIn] = useState(true);
  function toggleSignIn() {
    setIsSignIn((prev) => !prev);
  }
  return (
    <div className="relative min-h-screen bg-[#141414] text-white">
      <div className="absolute inset-0 bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/44b0dc1d-3f65-4cba-85e8-c560b7b98ec7/5f5b0f9d-e3e4-4f60-8e45-e0680e3e9a86/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_small.jpg')] bg-cover bg-center opacity-40"></div>
      <div className="absolute inset-0 bg-black/75"></div>

      <main className="relative z-10 flex min-h-[calc(100vh-80px)] items-center justify-center px-6 py-8 sm:px-10">
        <div className="w-full max-w-md rounded-xl bg-black/80 p-10 shadow-2xl shadow-black/50 ring-1 ring-white/10">
          {isSignIn ? (
            <>
              <h1 className="text-4xl font-bold tracking-tight">Sign In</h1>
              <p className="mt-3 text-sm text-gray-300">
                Enter your email and password to access your account.
              </p>
            </>
          ) : (
            <>
              <h1 className="text-4xl font-bold tracking-tight">Sign Up</h1>
              <p className="mt-3 text-sm text-gray-300">
                Create an account to start watching.
              </p>
            </>
          )}

          <form
            className="mt-8 space-y-6"
            onSubmit={(event) => event.preventDefault()}
          >
            <div className="space-y-4">
              {!isSignIn && (
                <label className="block text-sm font-semibold text-gray-200">
                  Full Name
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="mt-2 w-full rounded bg-[#333] px-4 py-3 text-gray-100 outline-none ring-1 ring-white/10 transition focus:ring-red-600"
                    required
                  />
                </label>
              )}
              <label className="block text-sm font-semibold text-gray-200">
                Email
                <input
                  type="email"
                  placeholder="Email address"
                  className="mt-2 w-full rounded bg-[#333] px-4 py-3 text-gray-100 outline-none ring-1 ring-white/10 transition focus:ring-red-600"
                  required
                />
              </label>

              <label className="block text-sm font-semibold text-gray-200">
                Password
                <input
                  type="password"
                  placeholder="Password"
                  className="mt-2 w-full rounded bg-[#333] px-4 py-3 text-gray-100 outline-none ring-1 ring-white/10 transition focus:ring-red-600"
                  required
                />
              </label>
            </div>

            <button
              type="submit"
              className="w-full rounded bg-red-600 px-4 py-3 text-base font-semibold text-white transition hover:bg-red-700"
            >
              {isSignIn ? "Sign In" : "Sign Up"}
            </button>
          </form>

          <div className="mt-6 text-sm text-gray-400">
            {isSignIn ? (
              <>
                New to Netflix? 
                <span
                  className="text-white hover:underline cursor-pointer ms-1"
                  onClick={toggleSignIn}
                >
                  Sign up now
                </span>
              </>
            ) : (
              <>
                Already have an account?
                <span
                  className="text-white hover:underline cursor-pointer ms-1"
                  onClick={toggleSignIn}
                >
                  {" "}
                  Sign in here
                </span>
              </>
            )}
            .
          </div>

          <div className="mt-4 text-xs text-gray-500">
            This page is protected by Google reCAPTCHA to ensure you&apos;re not
            a bot.
          </div>
        </div>
      </main>
    </div>
  );
}
