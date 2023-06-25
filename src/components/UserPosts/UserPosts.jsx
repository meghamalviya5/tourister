import React, { useContext } from "react";
import { AuthContext, PostContext } from "../..";
import PostCard from "../PostCard/PostCard";

const UserPosts = () => {
  const { state } = useContext(PostContext);
  const {
    state: { loggedInUser },
  } = useContext(AuthContext);

  return (
    <div white-bg>
      {state?.allPosts
        ?.filter((post) => post.username === loggedInUser.username)
        .map((post) => (
          <PostCard post={post} />
        ))}
    </div>
  );
};

export default UserPosts;
