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
    allPosts: [],
    users: [],
    selectedPostForEditDelete: "",
    editPostModal: false,
  };

  const [state, dispatch] = useReducer(postReducer, initialState);
  console.log(state, "---state incontext");
  useEffect(() => {
    getAllPosts();
    getUsers();
  }, []);

  const createUserPost = async (postContent) => {
    try {
      const response = await axios.post(
        "/api/posts",
        {
          postData: { content: postContent },
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
        // dispatch({
        //   type: "UPDATE_CONTENT",
        //   payload: "",
        // });
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

  const editUserPost = async (post) => {
    try {
      const response = await axios.post(
        `/api/posts/edit/${post._id}`,
        { postData: { content: post.content } },
        {
          headers: { authorization: encodedToken },
        }
      );

      if (response.status === 201) {
        dispatch({ type: "EDIT_POST", payload: response.data.posts });
        dispatch({ type: "SET_EDIT_MODAL_STATUS", payload: false });
        dispatch({ type: "SET_SELECTED_POST_ID", payload: false });
        toast.success("Post Updated Successfully!");
      }
    } catch (error) {
      if (
        error.response.status === 400 ||
        error.response.status === 404 ||
        error.response.status === 500
      ) {
        toast.error(error.response.message);
      }
    }
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

  const likePost = async (likedPost) => {
    try {
      const response = await axios.post(
        `/api/posts/like/${likedPost._id}`,
        {},
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );

      if (response.status === 201) {
        dispatch({
          type: "UPDATE_ALL_POSTS_STATE",
          payload: response.data.posts,
        });
      }
    } catch (error) {
      if (error.response.status === 500) {
        toast.error(error.response.statusText);
      } else if (
        error.response.status === 400 ||
        error.response.status === 404
      ) {
        console.log(
          JSON.parse(error.request.responseText),
          "----parsed string"
        );
        console.log(JSON.parse(error.request.responseText).errors[0], "---[0]");
        const errorText = JSON.parse(error.request.responseText).errors[0];
        toast.error(errorText);
      }
      console.log(error);
    }
  };
  const dislikePost = async (post) => {
    try {
      const response = await axios.post(
        `/api/posts/dislike/${post._id}`,
        {},
        { headers: { authorization: encodedToken } }
      );

      if (response.status === 201) {
        dispatch({
          type: "UPDATE_ALL_POSTS_STATE",
          payload: response.data.posts,
        });
      }
    } catch (error) {
      if (error.response.status === 500) {
        toast.error(error.response.statusText);
      } else if (
        error.response.status === 400 ||
        error.response.status === 404
      ) {
        // console.log(
        //   JSON.parse(error.request.responseText),
        //   "----parsed string"
        // );
        // console.log(JSON.parse(error.request.responseText).errors[0], "---[0]");
        const errorText = JSON.parse(error.request.responseText).errors[0];
        toast.error(errorText);
      }
    }
  };

  const handleEditDeleteShow = (postId) => {
    dispatch({
      type: "SET_SELECTED_POST_ID",
      payload: postId,
    });
  };

  const findUser = (userName) => {
    let name = [];
    const user = state.users.find((user) => user.username === userName);
    name[0] = user?.firstName;
    name[1] = user?.lastName;
    return name;
  };

  const valueProp = {
    state,
    dispatch,
    createUserPost,
    deletePost,
    editUserPost,
    dislikePost,
    likePost,
    handleEditDeleteShow,
    findUser,
  };

  return (
    <PostContext.Provider value={valueProp}>{children}</PostContext.Provider>
  );
};

export default PostProvider;
