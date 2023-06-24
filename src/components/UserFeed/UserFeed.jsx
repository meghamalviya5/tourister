import React, { useContext } from "react";
// get our fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart as faHeartSolid,
  faBookmark as faBookmarkSolid,
} from "@fortawesome/free-solid-svg-icons";

import {
  faHeart as faHeartLight,
  faBookmark as faBookmarkLight,
} from "@fortawesome/free-regular-svg-icons";

import "./UserFeed.css";
import "../../style.css";
import { PostContext } from "../../contexts/PostContext";
import { ToastContainer } from "react-toastify";
import NewPost from "../NewPost/NewPost";
import { AuthContext } from "../../contexts/AuthContext";
import EditDeletePost from "../EditDeletePost/EditDeletePost";
import PostHeader from "../PostHeader/PostHeader";

const UserFeed = () => {
  const { state, handleEditDeleteShow, dislikePost, likePost } =
    useContext(PostContext);

  const {
    state: authState,
    bookmarkPost,
    removeFromBookmark,
  } = useContext(AuthContext);

  //console.log(authState.loggedInUser, "---loggedInUser in context");
  // console.log("State in userfeed -- ", state);
  const findUser = (userName) => {
    let name = [];
    const user = state.users.find((user) => user.username === userName);
    name[0] = user?.firstName;
    name[1] = user?.lastName;
    return name;
  };

  return (
    <div>
      <main className="mt-xl">
        <NewPost />
        <PostHeader />
        {console.log("State in userfeed inside-- ", state.allPosts)}
        {state?.allPosts?.map((post) => (
          <div className="white-bg mr-xxl p-xs mt-s">
            <div className="flex flex-row nowrap p-xs">
              <div
                className="grey-bg br-full width-xl height-xl p-xs mr-xs"
                style={{ aspectRatio: 1 }}
              ></div>
              <div>
                <div className="flex flex-row flex-align-center flex-space-between">
                  <div className="flex flex-row">
                    <p className="fw-semibold">
                      {findUser(post.username).map((name) => name + " ")}
                    </p>
                    <p className="grey-color pl-xs">
                      <span className="pl-xs">•</span>
                      <span className="pl-xs">time</span>
                    </p>
                  </div>
                  {authState.loggedInUser.username === post.username ? (
                    <div className="relative">
                      <p
                        className=""
                        onClick={() => handleEditDeleteShow(post._id)}
                      >
                        ∙∙∙
                      </p>
                      {state.selectedPostForEditDelete === post._id ? (
                        <EditDeletePost selectedPost={post} />
                      ) : null}
                      {/* {state.editDeleteShow ? (
                        <EditDeletePost selectedPost={post} />
                      ) : null} */}
                    </div>
                  ) : null}
                </div>
                <p className="pr-s pt-xs">{post.content}</p>
                <div className="flex flex-row nowrap flex-space-between pb-xs pt-m pr-s flex-align-center">
                  {post.likes.likedBy.find(
                    (user) => user.username === authState.loggedInUser.username
                  ) ? (
                    <FontAwesomeIcon
                      icon={faHeartSolid}
                      onClick={() => dislikePost(post)}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faHeartLight}
                      onClick={() => likePost(post)}
                    />
                  )}
                  {post.likes.likeCount > 0 ? post.likes.likeCount : null}
                  {authState.loggedInUser.bookmarks.find(
                    (postId) => postId === post._id
                  ) ? (
                    <FontAwesomeIcon
                      icon={faBookmarkSolid}
                      onClick={() => removeFromBookmark(post._id)}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faBookmarkLight}
                      onClick={() => bookmarkPost(post._id)}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </main>
      <ToastContainer />
    </div>
  );
};

export default UserFeed;
