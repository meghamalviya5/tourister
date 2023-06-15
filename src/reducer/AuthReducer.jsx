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

    // case "SIGN_IN_PASSWORD":
    //   return {
    //     ...state,
    //     signInDetails: { ...state.signInDetails, password: action.payload },
    //   };

    case "SIGN_IN_SHOW_HIDE_PASSWORD":
      return {
        ...state,
        signInDetails: {
          ...state.signInDetails,
          showPassword: !state.signInDetails.showPassword,
        },
      };

    case "UPDATE_SIGN_UP_DETAILS":
      return {
        ...state,
        signUpDetails: {
          ...state.signUpDetails,
          [action.payload.key]: action.payload.value,
        },
      };

    default:
      return { state };
  }
};
