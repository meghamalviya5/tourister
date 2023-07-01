import { Link } from "react-router-dom";
import React, { useContext } from "react";
import "./Sidebar.css";
import "../../style.css";
import { AuthContext } from "../../contexts/AuthContext";
// import "font-awesome/css/font-awesome.min.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { PostContext } from "../../contexts/PostContext";
import CreatePostModal from "../Modals/CreatePostModal/CreatePostModal";

const Sidebar = () => {
  const {
    state: { loggedInUser },
    signOutHandler,
    getUserBookmarks,
    getUserById,
  } = useContext(AuthContext);

  const {
    state: { createPostModalStatus },
    dispatch,
    getUserPosts,
  } = useContext(PostContext);

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
              <Link to="bookmarks" onClick={getUserBookmarks}>
                <i className="fa fa-regular fa-bookmark"></i> &nbsp;
                <span className="fw-bold">Bookmarks</span>
              </Link>
            </div>

            <div className="pt-s black-color fw-semibold">
              <Link to="/landing-page" onClick={signOutHandler}>
                {/* <i className="fa fa-solid fa-user"></i> &nbsp; */}
                <FontAwesomeIcon icon={faSignOut} /> &nbsp;
                <span className="fw-bold">Sign Out</span>
              </Link>
            </div>

            <button
              className="mt-m p-s primary-bg white-color border-none outline-transparent new-post-btn"
              onClick={() =>
                dispatch({
                  type: "SET_CREATE_POST_MODAL_STATUS",
                  payload: true,
                })
              }
            >
              Create POST
            </button>
            {createPostModalStatus ? <CreatePostModal /> : null}
          </div>
          <Link
            to="profile"
            onClick={() => {
              getUserPosts(loggedInUser?.username);
              getUserById(loggedInUser?._id);
            }}
          >
            <div className="flex flex-space-between flex-align-center">
              <div className="flex">
                <div className="grey-bg br-full width-xl height-xl">
                  <img
                    src={`${loggedInUser?.avatar}`}
                    alt="tourist"
                    className="br-full"
                  />
                </div>
                <div className="flex flex-column ml-xs">
                  <div className="fw-bold">{`${loggedInUser?.firstName} ${loggedInUser?.lastName}`}</div>
                  <div className="fw-light grey-color">{`@${loggedInUser?.username}`}</div>
                </div>
              </div>
              {/* <div className="grey-color fw-bold">...</div> */}
            </div>
          </Link>
        </div>
      </aside>
    </React.Fragment>
  );
};

export default Sidebar;
