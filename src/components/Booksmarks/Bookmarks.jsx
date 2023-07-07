import React, { useContext } from "react";
import { AuthContext, PostContext } from "../..";
import PostCard from "../PostCard/PostCard";

const Bookmarks = () => {
  const {
    state: { allPosts },
  } = useContext(PostContext);
  const {
    state: { loggedInUserBookmarks },
  } = useContext(AuthContext);

  const bookmarkedPosts = loggedInUserBookmarks.map((bookmarkPostId) => {
    return allPosts.find((post) => post._id === bookmarkPostId);
  });

  return (
    <div>
      <div className="flex flex-space-between mr-xxl flex-align-center pt-s">
        <h3>Booksmarks</h3>
      </div>
      {bookmarkedPosts.length > 0 ? (
        bookmarkedPosts.map((bookmarkedPost) => (
          <PostCard post={bookmarkedPost} />
        ))
      ) : (
        <h3 className="pt-m pb-m pr-m">No bookmarks added yet!</h3>
      )}
    </div>
  );
};

export default Bookmarks;
