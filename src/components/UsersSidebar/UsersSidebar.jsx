import "./UsersSidebar.css";

// get our fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { PostContext } from "../../contexts/PostContext";
import { Link } from "react-router-dom";

const UsersSidebar = () => {
  const {
    state: { loggedInUser },
  } = useContext(AuthContext);

  const {
    state: { users },
  } = useContext(PostContext);

  console.log("in user sidebar");
  console.log("loggedInUser -----", loggedInUser);
  console.log("users -----", users);

  const usersToFollow = users.filter(
    (user) => user?.username !== loggedInUser?.username
  );

  return (
    <aside className="mt-xl mr-xxl sidebar2">
      <div className="white-bg mb-m pl-s border flex flex-row flex-center nowrap">
        <FontAwesomeIcon icon={faSearch} />
        <input
          type="search"
          name="search-bar"
          className="search-bar border-none outline-transparent p-s width-16"
          placeholder="Search Users"
        />
      </div>
      <div className="white-bg">
        <div className="fw-bold flex flex-row flex-space-between flex-align-center border-bottom p-s">
          <div>Suggested Users</div>
        </div>
        {usersToFollow.map((user) => (
          <Link to="profile" state={user}>
            <div className="flex p-s flex-space-between flex-align-center">
              <div className="grey-bg br-full width-xl height-xl"></div>
              <div className="flex flex-column">
                <a href="">
                  <div className="fw-bold">{`${user?.firstName} ${user?.lastName}`}</div>
                  <div className="fw-light grey-color">{`@${user?.username}`}</div>
                </a>
              </div>
              <div className="primary-color fw-bold">
                <a href="">
                  Follow <FontAwesomeIcon icon={faPlus} />
                </a>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default UsersSidebar;
