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
    isLoaded: false,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  console.log("in auth context");
  const signInHandler = async (e) => {
    e.preventDefault();
    dispatch({ type: "SET_LOADER" });
    //call login api
    try {
      let response = {};
      if (e.nativeEvent.submitter.name === "guestMode") {
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
        localStorage.setItem("token", response.data.encodedToken);
        toast.success("Signed in Successfully!");
        dispatch({ type: "RESET_SIGN_IN" });
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
    } finally {
      dispatch({ type: "SET_LOADER" });
    }
  };

  const newUserSignUpHandler = async (e) => {
    dispatch({ type: "SET_LOADER" });
    e.preventDefault();
    try {
      let response = {};
      if (e.nativeEvent.submitter.name === "dummyDetails") {
        dispatch({
          type: "UPDATE_SIGN_UP_DETAILS",
          payload: { key: "username", value: "jade" },
        });
        dispatch({
          type: "UPDATE_SIGN_UP_DETAILS",
          payload: { key: "password", value: "jade123" },
        });
        dispatch({
          type: "UPDATE_SIGN_UP_DETAILS",
          payload: { key: "confirmPassword", value: "jade123" },
        });
        dispatch({
          type: "UPDATE_SIGN_UP_DETAILS",
          payload: { key: "email", value: "jade123@gmail.com" },
        });
        dispatch({
          type: "UPDATE_SIGN_UP_DETAILS",
          payload: { key: "fullName", value: "Jade Johnson" },
        });
        console.log("state:: ", state);
      } else {
        response = await axios.post("/api/auth/signup", {
          username: state.signUpDetails.username,
          password: state.signUpDetails.password,
          confirmPassword: state.signUpDetails.confirmPassword,
          email: state.signUpDetails.email,
          fullName: state.signUpDetails.fullName,
        });
        if (response?.status === 201) {
          localStorage.setItem("token", response.data.encodedToken);
          toast.success("Signed Up Successfully!");
          dispatch({ type: "RESET_SIGN_UP" });
          navigate("/sign-in");
        }
      }
    } catch (error) {
      if (error.response.status === 422) {
        toast.error("Username Already Exists!");
        dispatch({ type: "RESET_SIGN_UP" });
      } else if (error.response.status === 500) {
        toast.error(error.response.data.error);
      }
    } finally {
      dispatch({ type: "SET_LOADER" });
    }
  };

  const valueProp = { state, dispatch, signInHandler, newUserSignUpHandler };

  return (
    <AuthContext.Provider value={valueProp}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
