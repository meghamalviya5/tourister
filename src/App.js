import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Home from "./pages/Home/Home";
import "./App.css";
import LandingPage from "./pages/LandingPage/LandingPage";
import Explore from "./components/Explore/Explore";
import Bookmarks from "./components/Booksmarks/Bookmarks";
import Profile from "./components/Profile/Profile";
import Layout from "./components/Layout/Layout";
import RequiresAuth from "./components/RequiresAuth";
import PostCard from "./components/PostCard/PostCard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/landing-page" element={<LandingPage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/" element={<Layout />}>
          <Route
            path=""
            element={
              <RequiresAuth>
                <Home />
              </RequiresAuth>
            }
          />
          <Route
            path="explore"
            element={
              <RequiresAuth>
                <Explore />
              </RequiresAuth>
            }
          />
          <Route
            path="bookmarks"
            element={
              <RequiresAuth>
                <Bookmarks />
              </RequiresAuth>
            }
          />
          <Route
            path="profile"
            element={
              <RequiresAuth>
                <Profile />
              </RequiresAuth>
            }
          />
          <Route
            path="post-details/:postId"
            element={
              <RequiresAuth>
                <PostCard />
              </RequiresAuth>
            }
          />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
