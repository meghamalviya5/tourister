import "./UsersSidebar.css";

// get our fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { PostContext } from "../../contexts/PostContext";
import { Link } from "react-router-dom";
import SearchSuggestions from "../SearchSuggestions/SearchSuggestions";

const UsersSidebar = () => {
  const {
    state: { loggedInUser, users, searchedUsers },
    getUserById,
    followUser,
    searchUsers,
  } = useContext(AuthContext);

  const {
    // state: { users },
    getUserPosts,
  } = useContext(PostContext);

  console.log("in user sidebar");
  // console.log("loggedInUser -----", loggedInUser);
  // console.log("users -----", users);

  // const usersToFollow = users.filter(
  //   (user) => user?.username !== loggedInUser?.username
  // );

  const usersToFollow = users.filter((user) => {
    if (user._id !== loggedInUser._id) {
      const findInFollowing = loggedInUser?.following?.find(
        (fuser) => fuser._id === user._id
      );
      if (!findInFollowing) {
        return true;
      }
    }
    return false;
  });

  console.log("in user sidebar, userToFollow = ", usersToFollow);

  return (
    <aside className="mt-xl mr-xxl sidebar2">
      <div className="white-bg mb-m pl-s border-color br-s flex flex-row flex-center nowrap">
        <FontAwesomeIcon icon={faSearch} />
        <input
          type="search"
          name="search-bar"
          className="search-bar border-none outline-transparent p-s width-16"
          placeholder="Search Users"
          onChange={searchUsers}
        />
      </div>
      {searchedUsers.length > 0 ? <SearchSuggestions /> : null}
      <div className="white-bg border-color br-s">
        <div className="fw-bold flex flex-row flex-space-between flex-align-center border-bottom p-s">
          <div>Suggested Users</div>
        </div>
        {usersToFollow.map((user) => (
          // <Link
          //   to="profile"
          //   onClick={() => {
          //     getUserPosts(user.username);
          //     getUserById(user._id);
          //   }}
          //   key={user._id}
          // >
          <div className="flex p-s flex-space-between flex-align-center">
            <Link
              to="profile"
              className="flex"
              onClick={() => {
                getUserPosts(user.username);
                getUserById(user._id);
              }}
              key={user._id}
            >
              <div className="grey-bg br-full width-xl height-xl mr-s">
                <img
                  src={`${user?.avatar}`}
                  alt="tourist"
                  className="br-full"
                />
              </div>
              <div className="flex flex-column">
                {/* <a href=""> */}
                <div className="fw-bold">{`${user?.firstName} ${user?.lastName}`}</div>
                <div className="fw-light grey-color">{`@${user?.username}`}</div>
                {/* </a> */}
              </div>
            </Link>
            <div className="primary-color fw-bold">
              <Link onClick={() => followUser(user._id)}>
                Follow <FontAwesomeIcon icon={faPlus} />
              </Link>
            </div>
          </div>
          // </Link>
        ))}
      </div>
    </aside>
  );
};

export default UsersSidebar;
