import React, { useContext } from "react";
import { PostContext } from "../../contexts/PostContext";
import PostCard from "../PostCard/PostCard";

const Explore = () => {
  const {
    state: { allPosts },
  } = useContext(PostContext);

  return (
    <div>
      <div className="flex flex-space-between mr-xxl flex-align-center pt-s">
        <h3>Explore</h3>
      </div>
      {allPosts.map((post) => (
        <PostCard post={post} />
      ))}
    </div>
  );
};

export default Explore;
