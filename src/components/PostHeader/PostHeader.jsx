import React, { useContext } from "react";
import { PostContext } from "../../contexts/PostContext";
import Filters from "../Filters/Filters";
import OutsideClickHandler from "react-outside-click-handler";

const PostHeader = () => {
  console.log("in postHeader");
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
        <OutsideClickHandler
          onOutsideClick={() => {
            dispatch({ type: "SET_FILTER_MODAL_STATUS", payload: false });
          }}
        >
          {filterModalStatus ? (
            <Filters
              show={filterModalStatus}
              message="Click outside to close this"
            />
          ) : null}
        </OutsideClickHandler>
      </i>
    </div>
  );
};

export default PostHeader;
