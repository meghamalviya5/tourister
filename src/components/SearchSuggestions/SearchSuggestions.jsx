import React, { useContext } from "react";
import { AuthContext, PostContext } from "../..";
import { Link } from "react-router-dom";
import "./SearchSuggestions.css";

const SearchSuggestions = () => {
  const {
    state: { searchedUsers },
    getUserById,
  } = useContext(AuthContext);

  const { getUserPosts } = useContext(PostContext);

  return (
    <div className="absolute search-result">
      {searchedUsers.map((user) => (
        <Link
          to="profile"
          onClick={() => {
            getUserPosts(user.username);
            getUserById(user._id);
          }}
          key={user._id}
        >
          <div className="flex p-s flex-space-around flex-align-center ">
            <div className="grey-bg br-full width-xl height-xl mr-xs"></div>
            <div className="flex flex-column">
              <div className="fw-bold">{`${user?.firstName} ${user?.lastName}`}</div>
              <div className="fw-light grey-color">{`@${user?.username}`}</div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SearchSuggestions;
