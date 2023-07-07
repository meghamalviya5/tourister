import React, { useContext, useRef } from "react";
import ReactDom from "react-dom";
import { PostContext } from "../../contexts/PostContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFire,
  faCaretDown,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";

import "./Filters.css";

const Filters = () => {
  const filtersRef = useRef();
  const { state, dispatch, sortByTrending, sortByLatest, sortByOldest } =
    useContext(PostContext);

  const closeFilters = (e) => {
    // if (e.target === filtersRef.current) {
    dispatch({ type: "SET_FILTER_MODAL_STATUS", payload: false });
    // }
  };
  return (
    <div className="overlay" ref={filtersRef} onClick={closeFilters}>
      <div
        className="filters flex flex-dir-col"
        onClick={(e) => {
          // do not close modal if anything inside modal content is clicked
          e.stopPropagation();
        }}
      >
        <button
          className="flex flex-gap-2 pt-xs pb-xs pl-xs pr-xs txt-left"
          onClick={sortByTrending}
          value="Trending"
          style={{
            backgroundColor:
              state.filters.sortBy === "Trending" ? "lightgrey" : "",
          }}
        >
          <FontAwesomeIcon icon={faFire} /> Trending
        </button>
        <button
          className="flex flex-gap-2 pt-xs pb-xs pl-xs pr-xs txt-left"
          onClick={sortByLatest}
          value="Latest"
          style={{
            backgroundColor:
              state.filters.sortBy === "Latest" ? "lightgrey" : "",
          }}
        >
          <FontAwesomeIcon icon={faCaretUp} /> Latest
        </button>
        <button
          className="flex flex-gap-2 pt-xs pb-xs pl-xs pr-xs txt-left"
          onClick={sortByOldest}
          value="Oldest"
          style={{
            backgroundColor:
              state.filters.sortBy === "Oldest" ? "lightgrey" : "",
          }}
        >
          <FontAwesomeIcon icon={faCaretDown} /> Oldest
        </button>
      </div>
    </div>
  );
};

export default Filters;
