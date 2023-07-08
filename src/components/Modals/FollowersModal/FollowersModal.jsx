import React, { useContext, useRef } from "react";
import ReactDom from "react-dom";
import { AuthContext, PostContext } from "../../..";
import { Link } from "react-router-dom";
// import "./Modal.css";

const FollowersModal = () => {
  const followersModalRef = useRef();
  const {
    state: { selectedUser },
    dispatch,
    getUserById,
  } = useContext(AuthContext);

  const { getUserPosts } = useContext(PostContext);

  const closeFollowersModal = (e) => {
    if (e.target === followersModalRef.current) {
      dispatch({ type: "SET_FOLLOWERS_MODAL_STATUS", payload: false });
    }
  };

  return ReactDom.createPortal(
    <div
      className="container"
      ref={followersModalRef}
      onClick={closeFollowersModal}
    >
      <div className="followers-modal flex p-s flex-column">
        <div className="flex flex-space-between">
          <div>Followers</div>
          <button
            className="btn-close"
            onClick={() =>
              dispatch({ type: "SET_FOLLOWERS_MODAL_STATUS", payload: false })
            }
          >
            X
          </button>
        </div>
        <div className="flex flex-dir-col justify-center flex-gap-4">
          {selectedUser.followers.length > 0 ? (
            selectedUser.followers.map((user) => (
              <Link
                to=""
                onClick={() => {
                  getUserPosts(user.username);
                  getUserById(user._id);
                  dispatch({
                    type: "SET_FOLLOWING_MODAL_STATUS",
                    payload: false,
                  });
                }}
                key={user._id}
              >
                <div className="flex flex-gap-2">
                  <div className="grey-bg br-full width-xl height-xl">
                    <img
                      src={`${user?.avatar}`}
                      alt="tourist"
                      className="br-full"
                    />
                  </div>
                  <div className="flex flex-column">
                    <div className="fw-bold">{`${user?.firstName} ${user?.lastName}`}</div>
                    <div className="fw-light grey-color">{`@${user?.username}`}</div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div>No Followers yet!</div>
          )}
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default FollowersModal;
