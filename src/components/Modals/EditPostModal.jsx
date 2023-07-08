import React, { useContext, useRef } from "react";
import ReactDom from "react-dom";
import { PostContext } from "../../contexts/PostContext";
import NewPost from "../NewPost/NewPost";

const EditPostModal = ({ selectedPost }) => {
  const { dispatch } = useContext(PostContext);
  const editModalRef = useRef();
  // console.log("selectedPOst--- ", selectedPost);

  const closeEditModal = (e) => {
    if (e.target === editModalRef.current) {
      dispatch({ type: "SET_EDIT_MODAL_STATUS", payload: false });
      dispatch({ type: "SET_SELECTED_POST_ID", payload: false });
    }
  };
  console.log("in edit modal");
  return ReactDom.createPortal(
    <div className="container" ref={editModalRef} onClick={closeEditModal}>
      <div className="editModal flex flex-column p-s">
        <div className="flex flex-space-between">
          <div className="txt-s fw-light">Edit Post</div>
          <button
            className="btn-close-post"
            onClick={() =>
              dispatch({ type: "SET_EDIT_MODAL_STATUS", payload: false })
            }
          >
            X
          </button>
        </div>
        <div className="white-bg p-xs mt-s">
          <NewPost editPostDetail={selectedPost} />
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default EditPostModal;
