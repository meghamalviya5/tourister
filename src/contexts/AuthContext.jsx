import { createContext, useReducer } from "react";
import axios from "axios";
import { authReducer } from "../reducer/AuthReducer";
import { useNavigate } from "react-router-dom";

// React Toastify
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const initialState = {
    signInDetails: {
      username: "",
      password: "",
      showPassword: false,
      isLoaded: false,
      error: "",
    },
    signUpDetails: {
      username: "",
      password: "",
      confirmPassword: "",
      email: "",
      fullName: "",
      isLoaded: false,
      error: "",
    },
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  console.log("in auth context");
  const signInHandler = async (e) => {
    e.preventDefault();
    // dispatch()
    //call login api
    try {
      let response = {};
      if (e.nativeEvent.submitter.name === "guestMode") {
        // dispatch({ type: "SIGN_IN_USERNAME", payload: "adarshbalika" });
        // dispatch({ type: "SIGN_IN_PASSWORD", payload: "adarshBalika123" });
        dispatch({
          type: "UPDATE_SIGN_IN_DETAILS",
          payload: { key: "username", value: "adarshbalika" },
        });
        dispatch({
          type: "UPDATE_SIGN_IN_DETAILS",
          payload: { key: "password", value: "adarshBalika123" },
        });
        response = await axios.post("/api/auth/login", {
          username: "adarshbalika",
          password: "adarshBalika123",
        });
      } else {
        response = await axios.post("/api/auth/login", {
          username: state.signInDetails.username,
          password: state.signInDetails.password,
        });
      }

      console.log(response, "success response");
      if (response.status === 200) {
        toast.success("Signed in Successfully!");
        navigate("/home");
      }
    } catch (error) {
      console.log(error, "error response");
      if (error.response.status === 404) {
        toast.error("Username not registered");
      } else if (error.response.status === 401) {
        // toast.error(error.response.data.errors[0]);
        toast.error("Invalid credentials");
      } else if (error.response.status === 500) {
        toast.error(error.response.data.error);
      }
    }
  };

  const newUserSignUpHandler = () => {};

  const valueProp = { state, dispatch, signInHandler };

  return (
    <AuthContext.Provider value={valueProp}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
