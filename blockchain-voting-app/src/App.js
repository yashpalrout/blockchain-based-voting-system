import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import SignIn from "./pages/SignIn/SignIn";
import UserHome from "./pages/UserHome/UserHome";
import Vote from "./pages/Vote/Vote";
import AdminHome from "./pages/AdminHome/AdminHome";
import Candidates from "./pages/Candidates/Candidates";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "Blockchain Based Voting System";
        metaDescription = "";
        break;
      case "/sign-in":
        title = "Sign In";
        metaDescription = "";
        break;
      case "/vote":
        title = "Vote";
        metaDescription = "";
        break;
      case "/admin-home":
        title = "Blockchain Based Voting System";
        metaDescription = "";
        break;
      case "/candidates":
        title = "Candidates";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<UserHome />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/vote" element={<Vote />} />
      <Route path="/admin-home" element={<AdminHome />} />
      <Route path="/candidates" element={<Candidates />} />
    </Routes>
  );
}
export default App;
