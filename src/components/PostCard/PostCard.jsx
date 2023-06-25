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
import { AuthContext, PostContext } from "../..";
import EditDeletePost from "../EditDeletePost/EditDeletePost";
import moment from "moment";

const PostCard = ({ post }) => {
  const { state, handleEditDeleteShow, dislikePost, likePost, findUser } =
    useContext(PostContext);

  const {
    state: authState,
    bookmarkPost,
    removeFromBookmark,
  } = useContext(AuthContext);

  return (
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
                <span className="pl-xs">
                  {/* {new Date(post.createdAt).getHours() +
                    " hrs " +
                    new Date(post.createdAt).getMinutes() +
                    " min"} */}
                  {moment(new Date(post.createdAt)).fromNow()}
                  {/* {console.log(post.createdAt, "...time createdAT")} */}
                  {/* {console.log( */}
                  {/* // date1.diff(post.createdAT),
                    // new Date(post.createdAt) +
                    //   "  " +
                    //   dayjs(new Date(post.createdAt)) +
                    //   "  " +
                //     post.createdAt +
                //       "---------- " +
                //       moment(new Date(post.createdAt)).fromNow(),
                //     "...DAYJS time createdAT"
                //   )} */}
                </span>
              </p>
            </div>
            {authState.loggedInUser.username === post.username ? (
              <div className="relative">
                <p className="" onClick={() => handleEditDeleteShow(post._id)}>
                  ∙∙∙
                </p>
                {state.selectedPostForEditDelete === post._id ? (
                  <EditDeletePost selectedPost={post} />
                ) : null}
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
  );
};

export default PostCard;
