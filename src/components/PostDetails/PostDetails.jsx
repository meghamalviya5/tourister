import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";
import PostCard from "../PostCard/PostCard";
import { PostContext } from "../../contexts/PostContext";

const PostDetails = () => {
  const { postId } = useParams();

  const { state } = useContext(PostContext);

  // const post = postId
  //   ? state.allPosts.find((post) => post._id === postId)
  //   : post;

  const post = state.allPosts.find((post) => post._id === postId);
  const navigate = useNavigate();

  return (
    <div className="flex flex-column pt-s">
      <div className="flex flex-gap-4">
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="m-tb-auto"
          onClick={() => navigate(-1)}
        />
        <h3>Post</h3>
      </div>
      <PostCard post={post} />
    </div>
  );
};

export default PostDetails;
