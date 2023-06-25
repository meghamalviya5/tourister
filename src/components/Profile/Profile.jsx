import UserProfile from "../UserProfile/UserProfile";
import UserPosts from "../UserPosts/UserPosts";

const Profile = () => {
  return (
    <main className="p-s">
      <UserProfile />
      <h3 className="m-s">Your Posts</h3>
      <UserPosts />
    </main>
  );
};

export default Profile;
