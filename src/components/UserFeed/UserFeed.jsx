import React from "react";
import "./UserFeed.css";
import "../../style.css";

const UserFeed = () => {
  return (
    <div>
      <main className="mt-xl">
        <div className="white-bg mr-xxl p-xs mt-s">
          <div className="flex flex-row nowrap p-xs">
            <div
              className="grey-bg br-full width-xl height-xl p-xs mr-xs"
              style={{ aspectRatio: 1 }}
            ></div>
            <div className="w-full">
              <textarea
                cols="50"
                rows="6"
                className="w-full lynx-white-bg p-s outline-transparent border-none"
                style={{ resize: "none" }}
                placeholder="Write something interesting..."
              ></textarea>
              <div className="flex flex-space-between pt-s">
                <div className="flex" style={{ gap: "1rem" }}>
                  <i className=""></i>
                  <i className=""></i>
                  <i className=""></i>
                </div>
                <button className="primary-bg p-l pt-xs pb-xs secondary-color border-none outline-transparent">
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserFeed;
