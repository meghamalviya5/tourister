import React, { useContext } from "react";
import { PostContext } from "../../contexts/PostContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFire,
  faCaretDown,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";

import "./Filters.css";

const Filters = (props) => {
  const { state, sortByTrending, sortByLatest, sortByOldest } =
    useContext(PostContext);
  if (!props.show) return null;

  return (
    <div className="overlay">
      <div className="filters flex flex-dir-col border br-s">
        <button
          className="flex flex-gap-2 pt-xs pb-xs pl-xs pr-xs txt-left btn-color-theme"
          onClick={sortByTrending}
          value="Trending"
          style={{
            backgroundColor:
              state.filters.sortBy === "Trending" ? "#c979ed" : "",
          }}
        >
          <FontAwesomeIcon icon={faFire} /> Trending
        </button>
        <button
          className="flex flex-gap-2 pt-xs pb-xs pl-xs pr-xs txt-left btn-color-theme"
          onClick={sortByLatest}
          value="Latest"
          style={{
            backgroundColor: state.filters.sortBy === "Latest" ? "#c979ed" : "",
          }}
        >
          <FontAwesomeIcon icon={faCaretUp} /> Latest
        </button>
        <button
          className="flex flex-gap-2 pt-xs pb-xs pl-xs pr-xs txt-left btn-color-theme"
          onClick={sortByOldest}
          value="Oldest"
          style={{
            backgroundColor: state.filters.sortBy === "Oldest" ? "#c979ed" : "",
          }}
        >
          <FontAwesomeIcon icon={faCaretDown} /> Oldest
        </button>
      </div>
    </div>
  );
};

export default Filters;
