import { createContext, useReducer } from "react";
import { postReducer } from "../reducer/PostReducer";
import axios from "axios";

// React Toastify
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const PostContext = createContext();

const encodedToken = localStorage.getItem("token");

const PostProvider = ({ children }) => {
  const initialState = { createPostContent: "", userPost: [] };

  const [state, dispatch] = useReducer(postReducer, initialState);

  const createUserPost = async () => {
    try {
      const response = await axios.post(
        "/api/posts",
        {
          content: state.createPostContent,
        },
        {
          headers: {
            authorization: encodedToken,
          },
        }
      );

      if (response.status === 201) {
        dispatch({ type: "CREATE_POST", payload: response.posts });
        toast.success("Post created Successfully!");
      }
    } catch (error) {
      if (error.response.status === 500) {
        toast.error("Failed to create a new post. Please Try again!");
      }
    }
  };

  const valueProp = { state, dispatch, createUserPost };

  return (
    <PostContext.Provider value={valueProp}>{children}</PostContext.Provider>
  );
};

export default PostProvider;
