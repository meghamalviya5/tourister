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
      <div className="filters flex flex-dir-col">
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
