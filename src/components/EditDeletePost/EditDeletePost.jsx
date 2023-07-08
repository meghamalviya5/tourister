import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

import { PostContext } from "../../contexts/PostContext";
import EditPostModal from "../Modals/EditPostModal";
import "./EditDeletePost.css";

const EditDeletePost = ({ selectedPost }) => {
  const { deletePost, state, dispatch } = useContext(PostContext);

  return (
    <div className="flex flex-column absolute w-max br-s shadow-lg border">
      {console.log(state.editPostModal, "--editPostModal")}
      <button
        className="flex flex-gap-2 pt-xs pb-xs pl-xs pr-xs txt-left"
        onClick={() =>
          dispatch({ type: "SET_EDIT_MODAL_STATUS", payload: true })
        }
      >
        <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon> Edit
      </button>
      {state.editPostModal ? (
        <EditPostModal selectedPost={selectedPost} />
      ) : null}
      <button
        className="flex flex-gap-2 pt-xs pb-xs pl-xs pr-xs txt-left text-red hover:bg-[#001e396b]"
        onClick={() => deletePost(selectedPost._id)}
      >
        <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon> Delete
      </button>
    </div>
  );
};

export default EditDeletePost;
