import React, { useContext } from "react";
import { AuthContext, PostContext } from "../..";
import PostCard from "../PostCard/PostCard";

const UserPosts = ({ selectedUser }) => {
  // const { state } = useContext(PostContext);
  const {
    state: { loggedInUserBookmarks },
  } = useContext(AuthContext);

  return (
    <div white-bg>
      {/* {state?.allPosts
        ?.filter((post) => post.username === selectedUser.username)
        .map((post) => (
          <PostCard post={post} />
        ))} */}

      {loggedInUserBookmarks.map((post) => (
        <PostCard post={post} />
      ))}
    </div>
  );
};

export default UserPosts;
