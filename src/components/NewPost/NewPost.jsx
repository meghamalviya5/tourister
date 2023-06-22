import React, { useContext } from "react";
import { PostContext } from "../../contexts/PostContext";
// get our fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile } from "@fortawesome/free-regular-svg-icons";

const NewPost = () => {
  const { state, dispatch, createUserPost } = useContext(PostContext);
  return (
    <div className="white-bg mr-xxl p-xs mt-s">
      <div className="flex flex-row nowrap p-xs">
        <div
          className="grey-bg br-full width-xl height-xl p-xs mr-xs"
          style={{ aspectRatio: 1 }}
        ></div>
        <div className="w-full">
          <textarea
            cols={50}
            rows={6}
            className="w-full lynx-white-bg p-s outline-transparent border-none"
            style={{ resize: "none" }}
            placeholder="Write your post..."
            value={state.createPostContent}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_CONTENT",
                payload: e.target.value,
              })
            }
          ></textarea>
          <div className="flex flex-space-between pt-s">
            <div className="flex" style={{ gap: "1rem" }}>
              {/* <i className=""></i>
          <i className=""></i> */}
              <FontAwesomeIcon icon={faSmile} />
            </div>
            <button
              className="primary-bg p-l pt-xs pb-xs secondary-color border-none outline-transparent"
              type="submit"
              onClick={createUserPost}
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPost;
