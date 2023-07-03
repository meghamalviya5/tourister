import React, { useContext, useEffect } from "react";
import { AuthContext, PostContext } from "../..";
import PostCard from "../PostCard/PostCard";

const UserPosts = () => {
  const { state, getUserPosts } = useContext(PostContext);
  const {
    state: { selectedUser, users },
  } = useContext(AuthContext);

  // useEffect(() => {
  //   getUserPosts(selectedUser.username);
  // }, [users]);

  console.log("in user posts");

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
