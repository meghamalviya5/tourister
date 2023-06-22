import React, { useContext } from "react";
import { PostContext } from "../../contexts/PostContext";
import EditPostModal from "../EditPostModal/EditPostModal";

const EditDeletePost = ({ selectedPost }) => {
  const { editPost, deletePost, state } = useContext(PostContext);

  return (
    <div className="flex flex-col  bg-dark absolute right-1.5 w-max rounded shadow-dark shadow-lg border border-darkGrey">
      {console.log(state.editPostModal, "--editPostModal")}
      <button
        className="py-2 px-4 text-left cursor-pointer hover:bg-[#001e396b]"
        onClick={() => editPost(selectedPost)}
      >
        Edit
      </button>
      {state.editPostModal ? <EditPostModal /> : null}
      <button
        className="py-2 px-4 text-left cursor-pointer text-red hover:bg-[#001e396b]"
        onClick={() => deletePost(selectedPost._id)}
      >
        Delete
      </button>
    </div>
  );
};

export default EditDeletePost;
