import { createContext, useEffect, useReducer } from "react";
import axios from "axios";
import { authReducer } from "../reducer/AuthReducer";
import { useNavigate } from "react-router-dom";

// React Toastify
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import girl from "../assets/girl.png";
import woman from "../assets/woman.png";
import womanCam from "../assets/woman-cam.png";
import travellerMap from "../assets/traveller-map.png";
import adventurer from "../assets/adventurer.png";
import traveller from "../assets/traveller.png";

//const encodedToken = localStorage.getItem("token");

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
      showPassword: false,
      confirmPassword: "",
      showConfirmPassword: false,
      email: "",
      // fullName: "",
      firstName: "",
      lastName: "",
      isLoaded: false,
      error: "",
    },
    editProfileDetails: {
      avatar: "",
      firstName: "",
      lastName: "",
      username: "",
      bio: "",
      website: "",
    },
    loggedInUser: null,
    loggedInUserBookmarks: [],
    selectedUser: {},
    isLoaded: false,
    users: [],
    followingModalStatus: false,
    followersModalStatus: false,
    searchedUsers: [],
    editProfileModal: false,
    encodedToken: "",
  };

  const avatars = [girl, woman, womanCam, travellerMap, adventurer, traveller];

  const [state, dispatch] = useReducer(authReducer, initialState);
  //console.log(state.loggedInUser, " ------loggedInUser");
  console.log(state.users, " ------users");

  useEffect(() => {
    getUsers();
    populateEditProfileDetails();
    dispatch({
      type: "SET_ENCODED_TOKEN",
      payload: localStorage.getItem("token"),
    });
  }, [state.loggedInUser]);

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
          payload: { key: "username", value: "meghamalviya" },
        });
        dispatch({
          type: "UPDATE_SIGN_IN_DETAILS",
          payload: { key: "password", value: "meghamalviya123" },
        });
        response = await axios.post("/api/auth/login", {
          username: "meghamalviya",
          password: "meghamalviya123",
        });
      } else {
        response = await axios.post("/api/auth/login", {
          username: state.signInDetails.username,
          password: state.signInDetails.password,
        });
      }

      // console.log(response, "success response");
      if (response.status === 200) {
        localStorage.setItem("token", response.data.encodedToken);
        dispatch({
          type: "SET_ENCODED_TOKEN",
          payload: response.data.encodedToken,
        });
        dispatch({
          type: "UPDATE_LOGGED_IN_USER",
          payload: response.data.foundUser,
        });
        dispatch({ type: "RESET_SIGN_IN" });
        toast.success("Signed in Successfully!");

        navigate("/");
      }
    } catch (error) {
      // console.log(error, "error response");
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
          payload: { key: "firstName", value: "Jade Johnson" },
        });
        dispatch({
          type: "UPDATE_SIGN_UP_DETAILS",
          payload: { key: "lastName", value: "Johnson" },
        });
      } else {
        response = await axios.post("/api/auth/signup", {
          avatar: avatars[Math.floor(Math.random() * avatars.length)],
          username: state.signUpDetails.username,
          password: state.signUpDetails.password,
          confirmPassword: state.signUpDetails.confirmPassword,
          email: state.signUpDetails.email,
          firstName: state.signUpDetails.firstName,
          lastName: state.signUpDetails.lastName,
        });
        if (response?.status === 201) {
          if (localStorage.getItem("token")) {
            localStorage.setItem("token", response.data.encodedToken);
            dispatch({
              type: "SET_ENCODED_TOKEN",
              payload: "",
            });
          }
          toast.success("Signed Up Successfully!");
          dispatch({ type: "RESET_SIGN_UP" });
          dispatch({
            type: "ADD_NEW_USER",
            payload: response.data.createdUser,
          });
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

  const bookmarkPost = async (postId) => {
    try {
      const response = await axios.post(
        `/api/users/bookmark/${postId}`,
        {},
        { headers: { authorization: state.encodedToken } }
      );
      if (response.status === 200) {
        dispatch({
          type: "UPDATE_BOOKMARKS",
          payload: response.data.bookmarks,
        });
      }
    } catch (error) {
      if (error.response.status === 500) {
        toast.error(error.response.statusText);
      } else if (
        error.response.status === 400 ||
        error.response.status === 404
      ) {
        const errorText = JSON.parse(error.request.responseText).errors[0];
        toast.error(errorText);
      }
      console.log(error, "----error in bookmark");
    }
  };

  const removeFromBookmark = async (postId) => {
    try {
      const response = await axios.post(
        `/api/users/remove-bookmark/${postId}`,
        {},
        {
          headers: {
            authorization: state.encodedToken,
          },
        }
      );
      if (response.status === 200) {
        dispatch({
          type: "UPDATE_BOOKMARKS",
          payload: response.data.bookmarks,
        });
        dispatch({
          type: "SET_USER_BOOKMARKS",
          payload: response.data.bookmarks,
        });
      }
    } catch (error) {
      if (error.response.status === 500) {
        toast.error(error.response.statusText);
      } else if (
        error.response.status === 400 ||
        error.response.status === 404
      ) {
        const errorText = JSON.parse(error.request.responseText).errors[0];
        toast.error(errorText);
      }
    }
  };

  const getUserBookmarks = async () => {
    try {
      const response = await axios.get(`/api/users/bookmark`, {
        headers: { authorization: state.encodedToken },
      });
      if (response.status === 200) {
        dispatch({
          type: "SET_USER_BOOKMARKS",
          payload: response.data.bookmarks,
        });
      }
    } catch (error) {
      if (error.response.status === 404) {
        const errorText = JSON.parse(error.request.responseText).errors[0];
        toast.error(errorText);
      } else if (error.response.status === 500) {
        toast.error(error.response.statusText);
      }
    }
  };

  const followUser = async (followUserId) => {
    try {
      const response = await axios.post(
        `/api/users/follow/${followUserId}`,
        {},
        {
          headers: { authorization: state.encodedToken },
        }
      );
      if (response.status === 200) {
        dispatch({
          type: "UPDATE_LOGGED_IN_USER_FOLLOWING",
          payload: response.data.user,
        });
        const updatedUsers = state.users.map((user) => {
          if (user.username === response.data.followUser.username) {
            return response.data.followUser;
          }
          return user;
        });

        dispatch({
          type: "UPDATE_FOLLOW_USER_FOLLOWERS",
          payload: updatedUsers,
        });
        if (state.loggedInUser.username === state.selectedUser.username) {
          dispatch({
            type: "UPDATE_SELECTED_USER",
            payload: response.data.user,
          });
        }
        toast.success(
          "You started Following " + response.data.followUser.username
        );
      }
    } catch (error) {
      if (error.response.status === 400 || error.response.status === 404) {
        const errorText = JSON.parse(error.request.responseText).errors[0];
        toast.error(errorText);
      } else if (error.response.status === 500) {
        toast.error(error.response.statusText);
      }
    }
  };

  const unfollowUser = async (followUserId) => {
    try {
      const response = await axios.post(
        `/api/users/unfollow/${followUserId}`,
        {},
        {
          headers: { authorization: state.encodedToken },
        }
      );
      if (response.status === 200) {
        dispatch({
          type: "UPDATE_LOGGED_IN_USER_FOLLOWING",
          payload: response.data.user,
        });
        const updatedUsers = state.users.map((user) => {
          if (user.username === response.data.followUser.username) {
            return response.data.followUser;
          }
          return user;
        });

        dispatch({
          type: "UPDATE_FOLLOW_USER_FOLLOWERS",
          payload: updatedUsers,
        });
        toast.success("You unfollowed " + response.data.followUser.username);
      }
    } catch (error) {
      if (error.response.status === 400 || error.response.status === 404) {
        const errorText = JSON.parse(error.request.responseText).errors[0];
        toast.error(errorText);
      } else if (error.response.status === 500) {
        toast.error(error.response.statusText);
      }
    }
  };

  const getUsers = async () => {
    try {
      const response = await axios.get("/api/users");

      if (response.status === 200) {
        dispatch({ type: "GET_ALL_USERS", payload: response.data.users });
      }
    } catch (error) {
      if (error.response.status === 500) {
        toast.error("Failed to fetch users!");
      }
    }
  };

  const getUserById = async (userId) => {
    try {
      const response = await axios.get(`/api/users/${userId}`);
      if (response.status === 200) {
        dispatch({ type: "UPDATE_SELECTED_USER", payload: response.data.user });
      }
    } catch (error) {
      if (error.response.status === 500) {
        toast.error(error.response.statusText);
      }
    }
  };

  const signOutHandler = () => {
    localStorage.removeItem("token");
    dispatch({ type: "USER_SIGN_OUT" });
    toast.success("Signed Out Successfully!");
  };

  const searchUsers = (e) => {
    let foundUsers = [];
    console.log(e.target.value, " e value");
    if (e.target.value) {
      foundUsers = state.users.filter(
        (user) =>
          user.username.toLowerCase().includes(e.target.value.toLowerCase()) ||
          user.firstName.toLowerCase().includes(e.target.value.toLowerCase()) ||
          user.lastName.toLowerCase().includes(e.target.value.toLowerCase())
      );
    }
    dispatch({ type: "UPDATE_SEARCHED_USERS", payload: foundUsers });
  };

  const populateEditProfileDetails = () => {
    console.log("in populate profile details");
    const profileDetails = {
      // avatar: state?.loggedInUser?.avatar,
      // firstName: state?.loggedInUser?.firstName,
      // lastName: state?.loggedInUser?.lastName,
      // username: state?.loggedInUser?.username,
      // bio: state?.loggedInUser?.bio,
      // website: state?.loggedInUser?.website,
      avatar: state?.selectedUser?.avatar,
      firstName: state?.selectedUser?.firstName,
      lastName: state?.selectedUser?.lastName,
      username: state?.selectedUser?.username,
      bio: state?.selectedUser?.bio,
      website: state?.selectedUser?.website,
    };
    dispatch({ type: "SET_EDIT_PROFILE_DETAILS", payload: profileDetails });
  };

  const handleEditProfileChange = (e, fieldName) => {
    const saveDetail = {
      ...state.editProfileDetails,
      [fieldName]: e.target.value,
    };
    dispatch({ type: "SET_EDIT_PROFILE_DETAILS", payload: saveDetail });
  };

  const onEditProfileSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "/api/users/edit",
        {
          userData: {
            avatar: state?.editProfileDetails?.avatar,
            username: state?.editProfileDetails?.username,
            bio: state?.editProfileDetails?.bio,
            website: state?.editProfileDetails?.website,
          },
        },
        { headers: { authorization: state.encodedToken } }
      );
      if (response.status === 201) {
        toast.success("User Profile Updated Successfully!");
        dispatch({
          type: "UPDATE_LOGGED_IN_USER",
          payload: response.data.user,
        });
        dispatch({
          type: "SET_EDIT_PROFILE_MODAL_STATUS",
          payload: false,
        });
      }
    } catch (error) {
      if (error.response.status === 400 || error.response.status === 404) {
        const errorText = JSON.parse(error.request.responseText).errors[0];
        toast.error(errorText);
      } else if (error.response.status === 500) {
        toast.error(error.response.statusText);
      }
    }
  };

  const valueProp = {
    state,
    dispatch,
    signInHandler,
    signOutHandler,
    newUserSignUpHandler,
    bookmarkPost,
    removeFromBookmark,
    getUserBookmarks,
    getUserById,
    followUser,
    unfollowUser,
    searchUsers,
    onEditProfileSubmit,
    handleEditProfileChange,
    getUsers,
    avatars,
  };

  return (
    <AuthContext.Provider value={valueProp}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
