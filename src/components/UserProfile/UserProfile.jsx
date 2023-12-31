import React, { useContext, useEffect } from "react";
import { PostContext, AuthContext } from "../..";
import FollowingModal from "../Modals/FollowingModal/FollowingModal";
import "./UserProfile.css";
import FollowersModal from "../Modals/FollowersModal/FollowersModal";
import EditProfileModal from "../Modals/EditProfileModal/EditProfileModal";

const UserProfile = () => {
  const {
    state: { allPosts },
  } = useContext(PostContext);
  const {
    state: {
      loggedInUser,
      selectedUser,
      followingModalStatus,
      followersModalStatus,
      editProfileModal,
    },
    dispatch,
    followUser,
    unfollowUser,
    getUsers,
  } = useContext(AuthContext);

  const checkUserInFollowing = loggedInUser.following.find(
    (user) => user._id === selectedUser._id
  );

  const loggedInUserPosts = allPosts.filter(
    (post) => post.username === selectedUser.username
  );

  useEffect(
    () => {
      console.log("in get users call useEffect");
      getUsers();
    },
    // eslint-disable-next-line
    [loggedInUser]
  );

  console.log("hihi in userprofile");
  console.log("selectedUser in userprofile = ", selectedUser);

  return (
    <div className="flex flex-column flex-center">
      <div className="lynx-gray-bg width-7 height-7 br-full">
        <img
          src={`${selectedUser?.avatar}`}
          alt="tourist"
          className="br-full"
        />
      </div>
      <h3 className="pt-s">{`${selectedUser?.firstName} ${selectedUser?.lastName}`}</h3>
      <p className="grey-color txt-s">{`@${selectedUser?.username}`}</p>
      {loggedInUser.username === selectedUser.username ? (
        <button
          className="border lynx-white-bg p-xs m-xs fw-semibold width-8"
          onClick={() =>
            dispatch({
              type: "SET_EDIT_PROFILE_MODAL_STATUS",
              payload: true,
            })
          }
        >
          Edit Profile
        </button>
      ) : checkUserInFollowing ? (
        <button
          className="border lynx-white-bg p-xs m-xs fw-semibold width-8"
          onClick={() => unfollowUser(selectedUser._id)}
        >
          Unfollow
        </button>
      ) : (
        <button
          className="border lynx-white-bg p-xs m-xs fw-semibold width-8"
          onClick={() => followUser(selectedUser._id)}
        >
          Follow
        </button>
      )}
      {editProfileModal ? <EditProfileModal /> : null}

      <p className="m-xs p-xs">{selectedUser.bio}</p>
      <a href={selectedUser.website} className="primary-color">
        {selectedUser.website}
      </a>
      <div className="white-bg p-xs m-xs flex flex-row flex-space-evenly">
        <div className="flex flex-column flex-center m-s ml-m mr-m">
          {followingModalStatus ? <FollowingModal /> : null}
          <p className="fw-black">{selectedUser?.following?.length}</p>
          <p
            className="fw-semibold follow-link"
            onClick={() =>
              dispatch({ type: "SET_FOLLOWING_MODAL_STATUS", payload: true })
            }
          >
            Following
          </p>
        </div>
        <div className="flex flex-column flex-center m-s ml-m mr-m">
          <p className="fw-black">{loggedInUserPosts?.length}</p>
          <p className="fw-semibold">Posts</p>
        </div>
        <div className="flex flex-column flex-center m-s ml-m mr-m">
          {followersModalStatus ? <FollowersModal /> : null}
          <p className="fw-black">{selectedUser?.followers?.length}</p>
          <p
            className="fw-semibold follow-link"
            onClick={() =>
              dispatch({ type: "SET_FOLLOWERS_MODAL_STATUS", payload: true })
            }
          >
            Followers
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
