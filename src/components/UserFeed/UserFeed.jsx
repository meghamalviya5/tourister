import React, { useContext } from "react";
import "./UserFeed.css";
import "../../style.css";
import { PostContext } from "../../contexts/PostContext";
import { ToastContainer } from "react-toastify";
import CreatePost from "../CreatePost/CreatePost";

const UserFeed = () => {
  const { state, dispatch, createUserPost } = useContext(PostContext);

  return (
    <div>
      <main className="mt-xl">
        <div className="white-bg mr-xxl p-xs mt-s">
          <div className="flex flex-row nowrap p-xs">
            <div
              className="grey-bg br-full width-xl height-xl p-xs mr-xs"
              style={{ aspectRatio: 1 }}
            ></div>
            {/* <form method="post" onSubmit={createUserPost}> */}
            <CreatePost />
            {/* </form> */}
          </div>
        </div>
      </main>
      <ToastContainer />
    </div>
  );
};

export default UserFeed;
