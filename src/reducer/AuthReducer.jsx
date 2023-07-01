export const authReducer = (state, action) => {
  console.log(action.payload, "in authreducer");
  switch (action.type) {
    case "UPDATE_SIGN_IN_DETAILS":
      return {
        ...state,
        signInDetails: {
          ...state.signInDetails,
          [action.payload.key]: action.payload.value,
        },
      };

    case "SIGN_IN_SHOW_HIDE_PASSWORD":
      return {
        ...state,
        signInDetails: {
          ...state.signInDetails,
          showPassword: !state.signInDetails.showPassword,
        },
      };

    case "UPDATE_LOGGED_IN_USER":
      return {
        ...state,
        loggedInUser: action.payload,
      };

    case "UPDATE_SIGN_UP_DETAILS":
      // console.log(action.payload, "in authreducer");
      return {
        ...state,
        signUpDetails: {
          ...state.signUpDetails,
          [action.payload.key]: action.payload.value,
        },
      };

    case "SIGN_UP_SHOW_HIDE_PASSWORD":
      return {
        ...state,
        signUpDetails: {
          ...state.signUpDetails,
          [action.payload.key]: !action.payload.value,
        },
      };

    case "RESET_SIGN_IN":
      return {
        ...state,
        signInDetails: {
          ...state.signInDetails,
          username: "",
          password: "",
        },
      };

    case "RESET_SIGN_UP":
      return {
        ...state,
        signUpDetails: {
          ...state.signUpDetails,
          username: "",
          password: "",
          confirmPassword: "",
          email: "",
          fullName: "",
        },
      };

    case "SET_LOADER":
      return { ...state, isLoaded: !state.isLoaded };

    case "UPDATE_BOOKMARKS":
      return {
        ...state,
        loggedInUser: {
          ...state.loggedInUser,
          bookmarks: action.payload,
        },
      };

    case "USER_SIGN_OUT":
      return { ...state, loggedInUser: null };

    case "SET_USER_BOOKMARKS":
      return { ...state, loggedInUserBookmarks: action.payload };

    case "UPDATE_SELECTED_USER":
      return { ...state, selectedUser: action.payload };

    case "UPDATE_LOGGED_IN_USER_FOLLOWING":
      return {
        ...state,
        loggedInUser: action.payload,
        selectedUser: action.payload,
      };

    case "UPDATE_FOLLOW_USER_FOLLOWERS":
      return {
        ...state,
        users: action.payload,
      };

    case "GET_ALL_USERS":
      return { ...state, users: action.payload };

    case "SET_FOLLOWING_MODAL_STATUS":
      return { ...state, followingModalStatus: action.payload };

    case "SET_FOLLOWERS_MODAL_STATUS":
      return { ...state, followersModalStatus: action.payload };

    case "UPDATE_SEARCHED_USERS":
      return { ...state, searchedUsers: action.payload };

    case "SET_EDIT_PROFILE_MODAL_STATUS":
      return { ...state, editProfileModal: action.payload };

    case "SET_EDIT_PROFILE_DETAILS":
      return {
        ...state,
        editProfileDetails: action.payload,
        selectedUser: { ...state.selectedUser, ...action.payload },
      };

    default:
      return { state };
  }
};
