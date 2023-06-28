import React, { useContext, useRef } from "react";
import ReactDom from "react-dom";
import { AuthContext } from "../../contexts/AuthContext";
// import "./Modal.css";

const FollowersModal = () => {
  const followersModalRef = useRef();
  const {
    state: { selectedUser },
    dispatch,
  } = useContext(AuthContext);

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
      <div className="followers-modal flex p-s flex-space-between flex-column">
        <div>Followers</div>
        {selectedUser.followers.length > 0 ? (
          <div>
            {selectedUser.followers.map((user) => (
              <div>
                <div className="flex p-s flex-space-between flex-align-center">
                  <div className="grey-bg br-full width-xl height-xl"></div>
                  <div className="flex flex-column">
                    <div className="fw-bold">{`${user?.firstName} ${user?.lastName}`}</div>
                    <div className="fw-light grey-color">{`@${user?.username}`}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>No Followers yet!</div>
        )}
        <button
          className="btn-close"
          onClick={() =>
            dispatch({ type: "SET_FOLLOWERS_MODAL_STATUS", payload: false })
          }
        >
          X
        </button>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default FollowersModal;
