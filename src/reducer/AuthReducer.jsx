export const authReducer = (state, action) => {
  switch (action.type) {
    case "SIGN_IN_USERNAME":
      return {
        ...state,
        signInDetails: { ...state.signInDetails, username: action.payload },
      };

    case "SIGN_IN_PASSWORD":
      return {
        ...state,
        signInDetails: { ...state.signInDetails, password: action.payload },
      };

    default:
      return { state };
  }
};
