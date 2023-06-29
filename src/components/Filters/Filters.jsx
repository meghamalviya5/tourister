import React, { useContext, useRef } from "react";
import ReactDom from "react-dom";
import { PostContext } from "../../contexts/PostContext";
import "./Filters.css";

const Filters = () => {
  const filtersRef = useRef();
  const { dispatch, sortByTrending, sortByLatest, sortByOldest } =
    useContext(PostContext);

  const closeFilters = (e) => {
    if (e.target === filtersRef.current) {
      dispatch({ type: "SET_FILTER_MODAL_STATUS", payload: false });
    }
  };
  return ReactDom.createPortal(
    <div
      className="absolute filter-container"
      ref={filtersRef}
      onClick={closeFilters}
    >
      <div className="filters">
        <button onClick={sortByTrending}>Trending</button>
        <button onClick={sortByLatest}>Latest</button>
        <button onClick={sortByOldest}>Oldest</button>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default Filters;
