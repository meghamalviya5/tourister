import React, { useContext, useRef } from "react";
import ReactDom from "react-dom";
import { AuthContext, PostContext } from "../..";
import { Link } from "react-router-dom";
// import "./Modal.css";

const FollowingModal = () => {
  const followingModalRef = useRef();
  const {
    state: { selectedUser },
    dispatch,
    getUserById,
  } = useContext(AuthContext);

  const { getUserPosts } = useContext(PostContext);

  const closeFollowingModal = (e) => {
    if (e.target === followingModalRef.current) {
      dispatch({ type: "SET_FOLLOWING_MODAL_STATUS", payload: false });
    }
  };

  return ReactDom.createPortal(
    <div
      className="container"
      ref={followingModalRef}
      onClick={closeFollowingModal}
    >
      <div className="following-modal flex p-s flex-space-between flex-column">
        <div>Followers</div>
        {selectedUser.following.length > 0 ? (
          <div>
            {selectedUser.following.map((user) => (
              <div>
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
                  <div className="flex p-s flex-space-between flex-align-center">
                    <div className="grey-bg br-full width-xl height-xl"></div>
                    <div className="flex flex-column">
                      <div className="fw-bold">{`${user?.firstName} ${user?.lastName}`}</div>
                      <div className="fw-light grey-color">{`@${user?.username}`}</div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div>Not Following anyone yet!</div>
        )}
        <button
          className="btn-close"
          onClick={() =>
            dispatch({ type: "SET_FOLLOWING_MODAL_STATUS", payload: false })
          }
        >
          X
        </button>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default FollowingModal;
