import { NavLink, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";

export default function Header() {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  function handleSignout() {
    // Implementation for sign-out functionality
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/pagenotfound");
      });
  }
  return (
    <header className="bg-[#141414]/90 text-white">
      <div className="mx-auto flex max-w-8xl items-center justify-between px-6 py-4 sm:px-10">
        <div className="flex items-center">
          <div className="text-3xl font-black tracking-[0.35em] text-red-600">
            NETFLIX
          </div>
        </div>

        {user && (
          <>
            <nav className="hidden gap-6 text-sm sm:flex">
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  `transition hover:text-gray-200 ${
                    isActive ? "text-white font-semibold" : "text-gray-400"
                  }`
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/movies"
                className={({ isActive }) =>
                  `transition hover:text-gray-200 ${
                    isActive ? "text-white font-semibold" : "text-gray-400"
                  }`
                }
              >
                Movies
              </NavLink>

              <NavLink
                to="/tv-series"
                className={({ isActive }) =>
                  `transition hover:text-gray-200 ${
                    isActive ? "text-white font-semibold" : "text-gray-400"
                  }`
                }
              >
                TV Series
              </NavLink>

              <NavLink
                to="/gpt-search"
                className={({ isActive }) =>
                  `transition hover:text-gray-200 ${
                    isActive ? "text-white font-semibold" : "text-gray-400"
                  }`
                }
              >
                GPT Search
              </NavLink>
            </nav>

            <div className="flex items-center gap-4">
              <span className="text-sm">{user?.displayName}</span>
              <img
                src={user?.photoURL}
                alt="Profile"
                className="h-8 w-8 rounded-full"
              />
              <button
                onClick={handleSignout}
                className="cursor-pointer rounded bg-red-600 px-4 py-2 text-sm font-semibold transition hover:bg-red-700"
              >
                Logout
              </button>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
