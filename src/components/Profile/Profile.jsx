import UserProfile from "../UserProfile/UserProfile";
import UserPosts from "../UserPosts/UserPosts";
import { useLocation } from "react-router-dom";

const Profile = () => {
  const location = useLocation();
  const user = location.state;
  console.log("user in profile - ", user);
  return (
    <main className="p-s">
      <UserProfile selectedUser={user} />
      <h3 className="m-s">Your Posts</h3>
      <UserPosts selectedUser={user} />
    </main>
  );
};

export default Profile;
