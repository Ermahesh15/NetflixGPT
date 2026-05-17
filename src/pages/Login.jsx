import { useRef, useState } from "react";
import validate from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { userLogin } from "../store/userSlice";
import { useDispatch } from "react-redux";
import { thumbnailBaseUrl } from "../utils/constant";

export default function Login() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const username = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();

  //Sign In and Sign Up form toggle handler
  function toggleSignIn() {
    setIsSignIn((prev) => !prev);
  }

  // Form submission handler
  function handleSubmit(event) {
    event.preventDefault();
    const errorMessage = validate(email.current.value, password.current.value);
    setErrorMessage(errorMessage);
    if (errorMessage) return;

    //Firebase authentication for Sign Up
    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          if (user !== null) {
            updateProfile(user, {
              displayName: username.current.value,
              photoURL: thumbnailBaseUrl,
            })
              .then(() => {
                const { uid, email, displayName, photoURL } = auth.currentUser;
                dispatch(
                  userLogin({
                    uid: uid,
                    email: email,
                    displayName: displayName,
                    photoURL: photoURL,
                  }),
                );
                console.log("Profile updated successfully");
              })
              .catch((error) => {
                // An error occurred
                console.error("Error updating profile:", error);
              });
          } else {
            console.log("No user is currently signed in.");
          }
        })
        .catch((error) => {
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    } else {
      //Firebase authentication for Sign In
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user + "logged in");
        })
        .catch((error) => {
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    }
  }

  return (
    <div className="relative min-h-screen bg-[#141414] text-white">
      <div className="absolute inset-0 bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/d4ebd098-d7d7-40ec-9565-f43c2e25a140/web/IN-en-20260504-TRIFECTA-perspective_b86d8ae6-1919-488e-b078-01e21325cf65_large.jpg')] bg-cover bg-center opacity-64"></div>
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

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              {!isSignIn && (
                <label className="block text-sm font-semibold text-gray-200">
                  Full Name <span className="text-red-500">*</span>
                  <input
                    type="text"
                    ref={username}
                    placeholder="Full Name"
                    className="mt-2 w-full rounded bg-[#333] px-4 py-3 text-gray-100 outline-none ring-1 ring-white/10 transition focus:ring-red-600"
                  />
                </label>
              )}
              <label className="block text-sm font-semibold text-gray-200">
                Email <span className="text-red-500">*</span>
                <input
                  type="email"
                  ref={email}
                  placeholder="Email address"
                  className="mt-2 w-full rounded bg-[#333] px-4 py-3 text-gray-100 outline-none ring-1 ring-white/10 transition focus:ring-red-600"
                />
              </label>

              <label className="block text-sm font-semibold text-gray-200">
                Password <span className="text-red-500">*</span>
                <input
                  type="password"
                  ref={password}
                  placeholder="Password"
                  className="mt-2 w-full rounded bg-[#333] px-4 py-3 text-gray-100 outline-none ring-1 ring-white/10 transition focus:ring-red-600"
                  autoComplete=""
                />
              </label>
            </div>
            <p className="text-red-500">{errorMessage}</p>
            <button
              type="submit"
              className="cursor-pointer w-full rounded bg-red-600 px-4 py-3 text-base font-semibold text-white transition hover:bg-red-700"
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
