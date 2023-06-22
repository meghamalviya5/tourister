import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate, useLocation } from "react-router";

const RequiresAuth = ({ children }) => {
  const { state } = useContext(AuthContext);
  const location = useLocation();

  // console.log("state.loggedInUser in RequiresAuth: ", state.loggedInUser);
  return state.loggedInUser ? (
    children
  ) : (
    <Navigate to="/landing-page" state={{ from: location }} />
  );
};

export default RequiresAuth;
