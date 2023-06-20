import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Home from "./pages/Home/Home";
import "./App.css";
import LandingPage from "./pages/LandingPage/LandingPage";
import UserFeed from "./components/UserFeed/UserFeed";
import Explore from "./components/Explore/Explore";
import Bookmarks from "./components/Booksmarks/Bookmarks";
import Profile from "./components/Profile/Profile";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<LandingPage />} /> */}
        <Route path="/landingPage" element={<LandingPage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="explore" element={<Explore />} />
          <Route path="bookmarks" element={<Bookmarks />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        {/* <Route path="/home" element={<Home />}>
          <Route path="" element={<UserFeed />} />
          <Route path="explore" element={<Explore />} />
          <Route path="bookmarks" element={<Bookmarks />} />
          <Route path="profile" element={<Profile />} />
        </Route> */}
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
