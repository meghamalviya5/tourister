import React, { useContext } from "react";
import "./UserFeed.css";
import "../../style.css";
import { PostContext } from "../..";
import { ToastContainer } from "react-toastify";
import NewPost from "../NewPost/NewPost";
import PostHeader from "../PostHeader/PostHeader";
import PostCard from "../PostCard/PostCard";

const UserFeed = () => {
  const { state } = useContext(PostContext);

  return (
    <div>
      <main className="mt-xl">
        <NewPost />
        <PostHeader />
        {state?.allPosts?.map((post) => (
          <PostCard post={post} key={post._id} />
        ))}
      </main>
      <ToastContainer />
    </div>
  );
};

export default UserFeed;
