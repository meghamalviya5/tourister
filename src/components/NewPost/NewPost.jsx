import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile } from "@fortawesome/free-regular-svg-icons";
import Picker from "emoji-picker-react";

import { AuthContext, PostContext } from "../..";

const NewPost = ({ editPostDetail }) => {
  console.log("editPostDetail ----- ", editPostDetail);
  const [content, setContent] = useState(
    editPostDetail ? editPostDetail.content : ""
  );

  const [showEmoji, setShowEmoji] = useState(false);

  const {
    state: { loggedInUser },
  } = useContext(AuthContext);
  const { createUserPost, editUserPost } = useContext(PostContext);

  const addEmoji = (e) => {
    let sym = e.unified.split("-");
    let codesArray = [];
    sym.forEach((el) => codesArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codesArray);
    setContent(content + emoji);
  };

  return (
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
          <div className="flex relative" style={{ gap: "1rem" }}>
            {/* <FontAwesomeIcon
              icon={faSmile}
              onClick={() => setShowEmoji(!showEmoji)}
            /> */}
            {/* {showEmoji ? (
              <Picker
                className="absolute"
                onSelect={addEmoji}
                set="google"
                title=""
                emoji=""
                theme="light"
                showSkinTones={false}
                showPreview={false}
                emojiTooltip={false}
                enableFrequentEmojiSort={false}
                style={{
                  top: 0,
                  position: "absolute",
                  bottom: "20px",
                  right: "50px",
                  maxWidth: "250px",
                  with: "100%",
                  outline: "none",
                }}
              />
            ) : null} */}
          </div>
          <button
            className="primary-bg p-l pt-xs pb-xs secondary-color br-s border-none outline-transparent"
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
  );
};

export default NewPost;
