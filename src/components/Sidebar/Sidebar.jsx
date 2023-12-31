import { Link } from "react-router-dom";
import React, { useContext } from "react";
import "./Sidebar.css";
import "../../style.css";
import { AuthContext, PostContext } from "../..";
import CreatePostModal from "../Modals/CreatePostModal/CreatePostModal";

const Sidebar = () => {
  const {
    state: { loggedInUser },
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
              <Link
                to="profile"
                onClick={() => {
                  getUserPosts(loggedInUser?.username);
                  getUserById(loggedInUser?._id);
                }}
              >
                <i className="fa fa-solid fa-user"></i> &nbsp;
                <span className="fw-bold">Profile</span>
              </Link>
            </div>

            <button
              className="mt-m p-s primary-bg white-color br-s border-none outline-transparent new-post-btn"
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
            <div className="flex flex-space-between flex-align-center fixed profile-div">
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
            </div>
          </Link>
        </div>
      </aside>
    </React.Fragment>
  );
};

export default Sidebar;
