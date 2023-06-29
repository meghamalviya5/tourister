import React, { useContext } from "react";
import { PostContext } from "../../contexts/PostContext";
import Filters from "../Filters/Filters";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSliders } from "@fortawesome/free-solid-svg-icons";

const PostHeader = () => {
  const {
    state: { filterModalStatus },
    dispatch,
  } = useContext(PostContext);
  return (
    <div className="flex flex-space-between mr-xxl flex-align-center pt-s relative">
      <h3>Posts</h3>
      <i
        className="fa fa-regular fa-sliders"
        onClick={() =>
          dispatch({ type: "SET_FILTER_MODAL_STATUS", payload: true })
        }
      ></i>

      {/* <FontAwesomeIcon icon={faSliders} /> */}
      {filterModalStatus ? <Filters /> : null}
    </div>
  );
};

export default PostHeader;
