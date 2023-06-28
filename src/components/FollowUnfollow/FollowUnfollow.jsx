import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

console.log(" in follow");
const Follow = ({ selectedPost }) => {
  const {
    state: { loggedInUser, users },
    followUser,
    unfollowUser,
  } = useContext(AuthContext);

  // const {
  //   state: { users },
  // } = useContext(PostContext);

  const isFollowing = loggedInUser.following.find(
    (user) => user.username === selectedPost.username
  );

  const userPost = users.find(
    (user) => user.username === selectedPost.username
  );

  return (
    <div>
      {isFollowing ? (
        <button onClick={() => unfollowUser(userPost._id)}>Unfollow</button>
      ) : (
        <button onClick={() => followUser(userPost._id)}>Follow</button>
      )}
    </div>
  );
};

export default Follow;
