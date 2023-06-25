import React, { useContext } from "react";
import { AuthContext, PostContext } from "../..";
import PostCard from "../PostCard/PostCard";

const UserPosts = () => {
  const { state } = useContext(PostContext);

  return (
    <div white-bg>
      {state?.userPosts.map((post) => (
        <PostCard post={post} />
      ))}
    </div>
  );
};

export default UserPosts;
