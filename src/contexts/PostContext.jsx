import { createContext, useEffect, useReducer } from "react";
import { postReducer } from "../reducer/PostReducer";
import axios from "axios";

// React Toastify
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const PostContext = createContext();

const encodedToken = localStorage.getItem("token");

const PostProvider = ({ children }) => {
  const initialState = {
    createPostContent: "",
    allPosts: [],
    users: [],
    editDeleteShow: false,
    editPostModal: false,
  };

  const [state, dispatch] = useReducer(postReducer, initialState);
  console.log(state, "---state incontext");
  useEffect(() => {
    getAllPosts();
    getUsers();
  }, []);

  const createUserPost = async () => {
    try {
      const response = await axios.post(
        "/api/posts",
        {
          postData: { content: state.createPostContent },
        },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );

      if (response.status === 201) {
        dispatch({ type: "CREATE_POST", payload: response.data.posts });
        toast.success("Post created Successfully!");
        dispatch({
          type: "UPDATE_CONTENT",
          payload: "",
        });
      }
    } catch (error) {
      if (error.response.status === 500) {
        toast.error("Failed to create a new post. Please Try again!");
      }
    }
  };

  const getAllPosts = async () => {
    try {
      const response = await axios.get("/api/posts");

      if (response.status === 200) {
        dispatch({ type: "GET_ALL_POSTS", payload: response.data.posts });
      }
    } catch (error) {
      if (error.response.status === 500) {
        toast.error("Failed to fetch posts!");
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

  const editPost = async (chosenPost) => {
    const postFound = state.allPosts.find(
      (post) => post._id === chosenPost._id
    );
    dispatch({ type: "SET_EDIT_MODAL_STATUS", payload: true });
    dispatch({ type: "UPDATE_CONTENT", payload: postFound.content });
  };

  const updatePost = async () => {
    try {
    } catch (error) {}
  };

  const deletePost = async (postId) => {
    try {
      const response = await axios.delete(`/api/posts/${postId}`, {
        headers: {
          authorization: encodedToken,
        },
      });
      if (response.status === 201) {
        dispatch({ type: "DELETE_POST", payload: response.data.posts });
        toast.success("Post Deleted Successfully!");
      }
    } catch (error) {
      toast.error("Failed to delete the post");
    }
  };

  const handleEditDeleteShow = () => {
    dispatch({
      type: "SET_EDIT_DELETE_DROPDOWN_STATUS",
      payload: !state.editDeleteShow,
    });
  };

  const valueProp = {
    state,
    dispatch,
    createUserPost,
    editPost,
    deletePost,
    handleEditDeleteShow,
  };

  return (
    <PostContext.Provider value={valueProp}>{children}</PostContext.Provider>
  );
};

export default PostProvider;
