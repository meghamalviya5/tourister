import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile } from "@fortawesome/free-regular-svg-icons";

import { AuthContext, PostContext } from "../..";

const NewPost = ({ editPostDetail }) => {
  console.log("editPostDetail ----- ", editPostDetail);
  const [content, setContent] = useState(
    editPostDetail ? editPostDetail.content : ""
  );

  const {
    state: { loggedInUser },
  } = useContext(AuthContext);
  const { createUserPost, editUserPost } = useContext(PostContext);

  return (
    <div className="white-bg mr-xxl p-xs mt-s">
      <div className="flex flex-row nowrap p-xs">
        <div
          className="grey-bg br-full width-xl height-xl mr-xs"
          style={{ aspectRatio: 1 }}
        >
          <img
            src={`${loggedInUser?.avatar}`}
            alt="tourist"
            className="br-full"
          />
        </div>
        <div className="w-full">
          <textarea
            cols={50}
            rows={6}
            className="w-full lynx-white-bg p-s outline-transparent border-none"
            style={{ resize: "none" }}
            placeholder="Write your post..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
          <div className="flex flex-space-between pt-s">
            <div className="flex" style={{ gap: "1rem" }}>
              <FontAwesomeIcon icon={faSmile} />
            </div>
            <button
              className="primary-bg p-l pt-xs pb-xs secondary-color border-none outline-transparent"
              type="submit"
              onClick={() => {
                if (editPostDetail) {
                  editPostDetail.content = content;
                  editUserPost(editPostDetail);
                } else {
                  createUserPost(content);
                  setContent("");
                }
              }}
            >
              {editPostDetail ? "Save" : "Post"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPost;
