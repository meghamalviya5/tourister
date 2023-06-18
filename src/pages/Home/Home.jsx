import { Routes, Route, Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Main from "../../components/Main/Main";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import UsersSidebar from "../../components/UsersSidebar/UsersSidebar";
import "./Home.css";
import "../../style.css";

const Home = () => {
  return (
    <div className="container">
      <nav className="white-bg">
        <Navbar />
      </nav>
      <Sidebar />
      {/* <Main/> */}
      <Outlet />

      <UsersSidebar />

      {/* <div>
        <Footer />
      </div> */}
    </div>
  );
};

export default Home;
