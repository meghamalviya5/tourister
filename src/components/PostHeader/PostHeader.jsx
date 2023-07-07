import React, { useContext } from "react";
import { PostContext } from "../../contexts/PostContext";
import Filters from "../Filters/Filters";

const PostHeader = () => {
  const {
    state: { filters, filterModalStatus },
    dispatch,
  } = useContext(PostContext);
  return (
    <div className="flex flex-space-between mr-xxl flex-align-center pt-s">
      <h3>{filters.sortBy} Posts</h3>
      <i
        className="fa fa-regular fa-sliders"
        onClick={() =>
          dispatch({
            type: "SET_FILTER_MODAL_STATUS",
            payload: !filterModalStatus,
          })
        }
      >
        {filterModalStatus ? <Filters /> : null}
      </i>
    </div>
  );
};

export default PostHeader;
