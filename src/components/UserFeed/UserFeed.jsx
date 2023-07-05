import React, { useContext, useEffect } from "react";
import "./UserFeed.css";
import "../../style.css";
import { AuthContext, PostContext } from "../..";
import { ToastContainer } from "react-toastify";
import NewPost from "../NewPost/NewPost";
import PostHeader from "../PostHeader/PostHeader";
import PostCard from "../PostCard/PostCard";

const UserFeed = () => {
  const { state, dispatch } = useContext(PostContext);
  const {
    state: { loggedInUser },
  } = useContext(AuthContext);

  console.log("in userfeed");
  const userFeedPosts = () => {
    const postsToShowInUserFeed = state.allPosts.filter((post) => {
      const findUserFollowing = (user) => {
        // console.log(
        //   "user.username - " +
        //     user.username +
        //     " post.username - " +
        //     post.username
        // );
        return user.username === post.username;
      };
      // console.log(findUserFollowing, " ===findUserFollowing");
      if (
        post.username === loggedInUser.username ||
        loggedInUser.following.findIndex(findUserFollowing) >= 0
      ) {
        return true;
      }
      return false;
    });
    dispatch({ type: "UPDATE_FILTERED_POSTS", payload: postsToShowInUserFeed });
  };

  useEffect(() => {
    console.log(
      "in useEffect userfeed  === " + loggedInUser.following.toString()
    );
    userFeedPosts();
  }, [loggedInUser.following, state.allPosts]);

  return (
    <div>
      <main className="mt-xl">
        <div className="white-bg mr-xxl p-xs mt-s">
          <NewPost />
        </div>
        <PostHeader />
        {state?.filteredPosts.length > 0 ? (
          state?.filteredPosts?.map((post) => (
            <PostCard post={post} key={post._id} />
          ))
        ) : (
          <h3>No post available to show!</h3>
        )}
      </main>
      <ToastContainer />
    </div>
  );
};

export default UserFeed;
