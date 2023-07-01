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
      <div className="create-post-modal">
        <NewPost />
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default CreatePostModal;
