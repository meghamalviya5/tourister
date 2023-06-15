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

  console.log("in authreducer");
  const signInHandler = async (e) => {
    e.preventDefault();
    //call login api
    try {
      const response = await axios.post("/api/auth/login", {
        username: state.signInDetails.username,
        password: state.signInDetails.password,
      });

      console.log(response, "success response");
      if (response.status === 200) {
        toast.success("Sign in successful!");
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

  const valueProp = { state, dispatch, signInHandler };

  return (
    <AuthContext.Provider value={valueProp}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
