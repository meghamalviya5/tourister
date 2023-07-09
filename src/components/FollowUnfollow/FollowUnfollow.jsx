import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserXmark } from "@fortawesome/free-solid-svg-icons";

console.log(" in follow");
const FollowUnfollow = ({ selectedPost }) => {
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
    <div className="flex flex-column absolute br-s border ">
      {isFollowing ? (
        <button
          className="flex flex-gap-2 pt-xs pb-xs pl-xs pr-xs txt-left btn-color-theme"
          onClick={() => unfollowUser(userPost._id)}
        >
          <FontAwesomeIcon icon={faUserXmark} /> Unfollow
        </button>
      ) : (
        <button
          className="flex flex-gap-2 pt-xs pb-xs pl-xs pr-xs txt-left"
          onClick={() => followUser(userPost._id)}
        >
          Follow
        </button>
      )}
    </div>
  );
};

export default FollowUnfollow;
