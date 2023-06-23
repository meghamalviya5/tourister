import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import UsersSidebar from "../../components/UsersSidebar/UsersSidebar";
import React, { useContext, useRef } from "react";
import { PostContext } from "../../contexts/PostContext";
import "../../style.css";

const Layout = () => {
  const { dispatch } = useContext(PostContext);
  const editDeleteDropdownRef = useRef();

  const closeEditDeleteDropdown = (e) => {
    if (e.target === editDeleteDropdownRef.current) {
      dispatch({ type: "SET_EDIT_DELETE_DROPDOWN_STATUS", payload: false });
    }
  };

  return (
    <div
      className="container"
      ref={editDeleteDropdownRef}
      onClick={(e) => closeEditDeleteDropdown(e)}
    >
      <nav className="white-bg">
        <Navbar />
      </nav>
      <Sidebar />
      <Outlet />

      <UsersSidebar />
    </div>
  );
};

export default Layout;

// import { Routes, Route, Outlet } from "react-router-dom";
// import Footer from "../../components/Footer/Footer";
// import Main from "../../components/Main/Main";
// import Navbar from "../../components/Navbar/Navbar";
// import Sidebar from "../../components/Sidebar/Sidebar";
// import UsersSidebar from "../../components/UsersSidebar/UsersSidebar";
// import "./Home.css";
// import "../../style.css";

// const Home = () => {
//   return (
//     <div className="container">
//       <nav className="white-bg">
//         <Navbar />
//       </nav>
//       <Sidebar />
//       {/* <Main/> */}
//       <Outlet />

//       <UsersSidebar />

//       {/* <div>
//         <Footer />
//       </div> */}
//     </div>
//   );
// };

// export default Home;
