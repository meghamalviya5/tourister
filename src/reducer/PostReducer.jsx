export const postReducer = (state, action) => {
  console.log("in post reducer");
  switch (action.type) {
    case "CREATE_POST":
      return { ...state, allPosts: action.payload };

    case "GET_ALL_POSTS":
      return { ...state, allPosts: action.payload };

    case "GET_ALL_USERS":
      return { ...state, users: action.payload };

    case "UPDATE_CONTENT":
      return { ...state, createPostContent: action.payload };

    case "SET_EDIT_DELETE_DROPDOWN_STATUS":
      return { ...state, editDeleteShow: action.payload };

    // case "UPDATE_EDIT_DELETE_SHOW":
    //   return { ...state, editDeleteShow: action.payload };

    // case "CLOSE_EDIT_DELETE_DROPDOWN":
    //   return { ...state, editDeleteShow: action.payload };

    case "DELETE_POST":
      return { ...state, allPosts: action.payload };

    case "SET_EDIT_MODAL_STATUS":
      return { ...state, editPostModal: action.payload };

    // case "OPEN_EDIT_MODAL":
    //   return { ...state, editPostModal: true };

    default:
      return { state };
  }
};
