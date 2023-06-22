import React, { useContext, useRef } from "react";
import ReactDom from "react-dom";
import { PostContext } from "../../contexts/PostContext";

const EditPostModal = () => {
  const { dispatch } = useContext(PostContext);
  const editModalRef = useRef();

  const closeEditModal = (e) => {
    if (e.target === editModalRef.current) {
      dispatch({ type: "SET_EDIT_MODAL_STATUS", payload: false });
      dispatch({ type: "SET_EDIT_DELETE_DROPDOWN_STATUS", payload: false });
    }
  };
  console.log("in edit modal");
  return ReactDom.createPortal(
    <div className="container" ref={editModalRef} onClick={closeEditModal}>
      <div className="editModal">
        <h1>Hello</h1>
        <button
          className="update-post"
          onClick={() =>
            dispatch({ type: "SET_EDIT_MODAL_STATUS", payload: false })
          }
        >
          X
        </button>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default EditPostModal;
