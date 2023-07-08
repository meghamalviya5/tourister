import React, { useContext, useRef } from "react";
import ReactDom from "react-dom";
import { PostContext } from "../../../contexts/PostContext";
import NewPost from "../../NewPost/NewPost";

const CreatePostModal = () => {
  const createPostModalRef = useRef();
  const { dispatch } = useContext(PostContext);

  const closeCreatePostModal = (e) => {
    if (e.target === createPostModalRef.current) {
      dispatch({ type: "SET_CREATE_POST_MODAL_STATUS", payload: false });
    }
  };

  return ReactDom.createPortal(
    <div
      className="container"
      ref={createPostModalRef}
      onClick={closeCreatePostModal}
    >
      <div className="create-post-modal relative flex flex-column p-s">
        <div className="flex flex-space-between">
          <div className="txt-s fw-light">Create Post</div>
          <button
            className="btn-close"
            onClick={() =>
              dispatch({
                type: "SET_CREATE_POST_MODAL_STATUS",
                payload: false,
              })
            }
          >
            X
          </button>
        </div>
        <div className="white-bg p-xs mt-s">
          <NewPost />
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default CreatePostModal;
