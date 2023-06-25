import React, { useContext } from "react";
import { PostContext, AuthContext } from "../..";

const UserProfile = () => {
  const {
    state: { allPosts },
  } = useContext(PostContext);
  const {
    state: { loggedInUser },
  } = useContext(AuthContext);

  const postCount = allPosts?.filter(
    (post) => post.username === loggedInUser.username
  ).length;
  return (
    <div className="flex flex-column flex-center">
      <div className="lynx-gray-bg width-7 height-7 br-full"></div>
      <h3 className="pt-s">{`${loggedInUser?.firstName} ${loggedInUser?.lastName}`}</h3>
      <p className="grey-color txt-s">{`@${loggedInUser?.username}`}</p>
      <button className="border lynx-white-bg p-xs m-xs fw-semibold width-8">
        Edit Profile
      </button>
      <p className="m-xs p-xs">{loggedInUser.bio}</p>
      <a href="" className="primary-color">
        {loggedInUser.website}
      </a>
      <div className="white-bg p-xs m-xs flex flex-row flex-space-evenly">
        <div className="flex flex-column flex-center m-s ml-m mr-m">
          <p className="fw-black">10</p>
          <p className="fw-semibold">Following</p>
        </div>
        <div className="flex flex-column flex-center m-s ml-m mr-m">
          <p className="fw-black">{postCount}</p>
          <p className="fw-semibold">Posts</p>
        </div>
        <div className="flex flex-column flex-center m-s ml-m mr-m">
          <p className="fw-black">1.5K</p>
          <p className="fw-semibold">Followers</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
