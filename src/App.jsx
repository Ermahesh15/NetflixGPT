import { useDispatch } from "react-redux";
import MainLayout from "./Layout/MainLayout";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import { useEffect } from "react";
import { userLogin, userLogout } from "./store/userSlice";
import { useNavigate } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          userLogin({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          }),
        );
        navigate("/home");
      } else {
        dispatch(userLogout(null));
        navigate("/");
      }
    });

    // cleanup
    return () => unsubscribe();
  }, []);

  return (
    <>
      <MainLayout />
    </>
  );
}

export default App;
