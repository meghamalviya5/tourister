export const postReducer = (state, action) => {
  console.log("in post reducer");
  switch (action.type) {
    case "CREATE_POST":
      return { ...state, allPosts: action.payload };

    case "GET_ALL_POSTS":
      return { ...state, allPosts: action.payload };

    case "GET_ALL_USERS":
      return { ...state, users: action.payload };

    // case "UPDATE_CONTENT":
    //   return { ...state, createPostContent: action.payload };

    case "SET_EDIT_DELETE_DROPDOWN_STATUS":
      return { ...state, editDeleteShow: action.payload };

    case "EDIT_POST":
      return { ...state, allPosts: action.payload };

    case "DELETE_POST":
      return { ...state, allPosts: action.payload };

    case "UPDATE_ALL_POSTS_STATE":
      return { ...state, allPosts: action.payload };

    case "SET_EDIT_MODAL_STATUS":
      return { ...state, editPostModal: action.payload };

    default:
      return { state };
  }
};
