export const postReducer = (state, action) => {
  console.log("in post reducer");
  switch (action.type) {
    case "CREATE_POST":
      return { ...state, allPosts: action.payload };

    case "GET_ALL_POSTS":
      return { ...state, allPosts: action.payload };

    // case "GET_ALL_USERS":
    //   return { ...state, users: action.payload };

    case "SET_SELECTED_POST_ID":
      return {
        ...state,
        selectedPostForEditDelete: action.payload,
        showEditDelete: !state.showEditDelete,
      };

    case "EDIT_POST":
      return { ...state, allPosts: action.payload };

    case "DELETE_POST":
      return { ...state, allPosts: action.payload };

    //remove unwanted cases for allPosts update
    case "UPDATE_ALL_POSTS_STATE":
      return { ...state, allPosts: action.payload };

    case "SET_EDIT_MODAL_STATUS":
      return { ...state, editPostModal: action.payload };

    case "UPDATE_USER_POSTS":
      return { ...state, userPosts: action.payload };

    case "SET_FILTER_MODAL_STATUS":
      return { ...state, filterModalStatus: action.payload };

    case "UPDATE_FILTERED_POSTS":
      return { ...state, filteredPosts: action.payload };

    case "UPDATE_FILTERS":
      return {
        ...state,
        filters: { ...state.filters, sortBy: action.payload },
      };

    case "SET_CREATE_POST_MODAL_STATUS":
      return { ...state, createPostModalStatus: action.payload };

    default:
      return { state };
  }
};
