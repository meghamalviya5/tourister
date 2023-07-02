import React, { useContext } from "react";
import { AuthContext, PostContext } from "../..";
import PostCard from "../PostCard/PostCard";

const UserPosts = () => {
  const { state } = useContext(PostContext);

  return (
    <div white-bg>
      {state?.userPosts.length ? (
        state?.userPosts.map((post) => <PostCard post={post} />)
      ) : (
        <h3>No post available to show!</h3>
      )}
    </div>
  );
};

export default UserPosts;
