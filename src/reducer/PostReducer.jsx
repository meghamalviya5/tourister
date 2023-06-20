export const postReducer = (state, action) => {
  switch (action.type) {
    case "CREATE_POST":
      return { ...state, userPosts: action.payload };

    case "UPDATE_CONTENT":
      return { ...state, createPostContent: action.payload };

    default:
      return { state };
  }
};
