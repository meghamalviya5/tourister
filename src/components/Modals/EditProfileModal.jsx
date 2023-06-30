import React, { useContext, useEffect, useRef } from "react";
import ReactDom from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

import { AuthContext } from "../../contexts/AuthContext";
import "./Modal.css";

const EditProfileModal = () => {
  const {
    dispatch,
    state: { editProfileDetails },
    onEditProfileSubmit,
    handleEditProfileChange,
  } = useContext(AuthContext);

  const editProfileModalRef = useRef();
  const { avatar, firstName, lastName, username, bio, website } =
    editProfileDetails;

  const closeEditProfileModal = (e) => {
    if (e.target === editProfileModalRef.current) {
      dispatch({ type: "SET_EDIT_PROFILE_MODAL_STATUS", payload: false });
    }
  };

  console.log("in edit profile modal");

  return ReactDom.createPortal(
    <div
      className="container"
      ref={editProfileModalRef}
      onClick={closeEditProfileModal}
    >
      <div className="edit-profile-modal">
        <form method="post" onSubmit={onEditProfileSubmit}>
          <div>Edit Profile</div>
          <div className="flex ">
            <div>Select Avatar</div>

            <label htmlFor="avatar">Avatar</label>
            <div className="relative">
              <img
                src={avatar}
                alt={username}
                className="br-full width-xl height-xl"
              />
              <div className="w-xl">
                <FontAwesomeIcon
                  icon={faCamera}
                  className="absolute left-0 top-8"
                />
                <input
                  type="file"
                  className="absolute left-0 right-8 w-5 h-5 top-8 opacity-0"
                  accept="image/apng, image/avif, image/gif, image/jpeg, image/png, image/svg+xml, image/jpg,image/webp"
                />
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="name">Name: </label> {`${firstName} ${lastName}`}
            {/* <input id="name" type="text" value={`${firstName} ${lastName}`} /> */}
          </div>
          <div>
            <label htmlFor="username">Username: </label> {username}
            {/* <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => handleEditProfileChange(e, "username")}
            /> */}
          </div>
          <div>
            <label htmlFor="bio">Bio</label>
            <input
              id="bio"
              type="text"
              value={bio}
              onChange={(e) => handleEditProfileChange(e, "bio")}
            />
          </div>
          <div>
            <label htmlFor="website">Website</label>
            <input
              id="website"
              type="text"
              value={website}
              onChange={(e) => handleEditProfileChange(e, "website")}
            />
          </div>
          <div>
            <button type="submit">Save</button>
            <button
              type="button"
              onClick={() =>
                dispatch({
                  type: "SET_EDIT_PROFILE_MODAL_STATUS",
                  payload: false,
                })
              }
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default EditProfileModal;
