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
  // }, [state.userPosts]);

  const loggedInUserPosts = state.allPosts.filter(
    (post) => post.username === selectedUser.username
  );

  console.log("in user posts");

  return (
    <div white-bg>
      {loggedInUserPosts.length ? (
        loggedInUserPosts.map((post) => <PostCard post={post} />)
      ) : (
        <h3 className="pt-m pb-m pr-m">No post available to show!</h3>
      )}
    </div>
  );
};

export default UserPosts;
