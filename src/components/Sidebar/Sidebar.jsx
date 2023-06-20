import { Link } from "react-router-dom";
import React from "react";
import "./Sidebar.css";
import "../../style.css";
// import "font-awesome/css/font-awesome.min.css";

const Sidebar = () => {
  return (
    <React.Fragment>
      <aside className="p-s pt-xl pl-xxl ml-m sidebar1">
        <div className="flex flex-column flex-space-between sidebar">
          <div>
            <div className="pt-s black-color fw-semibold">
              <Link to="/">
                <i className="fa fa-home"></i> &nbsp;
                <span className="fw-bold">Home</span>
              </Link>
            </div>

            <div className="pt-s black-color fw-semibold">
              <Link to="explore">
                <i className="fa fa-solid fa-rocket"></i> &nbsp;
                <span className="fw-bold">Explore</span>
              </Link>
            </div>

            <div className="pt-s black-color fw-semibold">
              <Link to="bookmarks">
                <i className="fa fa-regular fa-bookmark"></i> &nbsp;
                <span className="fw-bold">Bookmark</span>
              </Link>
            </div>

            <div className="pt-s black-color fw-semibold">
              <Link to="profile">
                <i className="fa fa-solid fa-user"></i> &nbsp;
                <span className="fw-bold">Profile</span>
              </Link>
            </div>

            <button className="mt-m p-s primary-bg white-color border-none outline-transparent new-post-btn">
              Create POST
            </button>
          </div>
          <div className="flex flex-space-between flex-align-center">
            <div className="flex">
              <div className="grey-bg br-full width-xl height-xl"></div>
              <div className="flex flex-column ml-xs">
                <div className="fw-bold">Full Name</div>
                <div className="fw-light grey-color">Username</div>
              </div>
            </div>
            <div className="grey-color fw-bold">...</div>
          </div>
        </div>
      </aside>
    </React.Fragment>
  );
};

export default Sidebar;
