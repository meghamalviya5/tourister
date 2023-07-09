import React, { useContext, useRef } from "react";
import ReactDom from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

import { AuthContext } from "../../../contexts/AuthContext";
import "../Modal.css";
import "./EditProfileModal.css";

const EditProfileModal = () => {
  const {
    dispatch,
    state: { editProfileDetails },
    onEditProfileSubmit,
    handleEditProfileChange,
    avatars,
  } = useContext(AuthContext);

  const editProfileModalRef = useRef();
  const { avatar, firstName, lastName, username, bio, website } =
    editProfileDetails;

  // const avatars = [girl, woman, womanCam, travellerMap, adventurer, traveller];

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
      {/* <div className="edit-profile-modal flex flex-column p-s"> */}
      <form
        className="edit-profile-modal flex flex-column p-s flex-gap-2"
        method="post"
        onSubmit={onEditProfileSubmit}
      >
        <div className="flex flex-space-between">
          <div className="txt-s fw-light">Edit Profile</div>
          <button
            className="btn-close"
            onClick={() =>
              dispatch({
                type: "SET_EDIT_PROFILE_MODAL_STATUS",
                payload: false,
              })
            }
          >
            X
          </button>
        </div>
        <div className="flex flex-column flex-center">
          <div className="txt-s p-s fw-bold">Choose Your Avatar</div>
          <div className="flex flex-wrap flex-gap-2 w-full flex-center border p-s">
            {avatars.map((avatar) => (
              <label>
                <input
                  type="radio"
                  name="avatar"
                  value={avatar}
                  checked={avatar === editProfileDetails.avatar}
                  onChange={(e) => handleEditProfileChange(e, "avatar")}
                />
                <img
                  src={avatar}
                  alt="profile-pic"
                  className="br-full w-16 h-16"
                />
              </label>
            ))}
          </div>
        </div>
        <div className="flex flex-center border p-xs mt-xs mb-xs">
          <div className="relative">
            <img
              src={avatar}
              alt={username}
              className="br-full h-14"
              style={{ aspectRatio: 1 }}
            />
            <div className="w-xl">
              <FontAwesomeIcon
                icon={faCamera}
                className="absolute right-0 top-10 h-5"
              />
              <input
                type="file"
                className="absolute right-0 left-8 w8 h-8 top-10 opacity-0"
                accept="image/apng, image/avif, image/gif, image/jpeg, image/png, image/svg+xml, image/jpg,image/webp"
              />
            </div>
          </div>
        </div>
        <div className="border br-s p-xs non-edit-bg-color">
          <label className="txt-lt-s" htmlFor="name">
            Name{" "}
          </label>
          <div> {`${firstName} ${lastName}`}</div>
        </div>
        <div className="border br-s p-xs non-edit-bg-color">
          <label className="txt-lt-s" htmlFor="username">
            Username{" "}
          </label>
          <div> {username}</div>
        </div>
        <div className="border br-s p-xs edit-bg-color">
          <label className="txt-lt-s" htmlFor="bio">
            Bio
          </label>
          <div className="relative">
            <input
              id="bio"
              className="border-none outline-none w-full edit-bg-color pr-m"
              type="text"
              value={bio}
              onChange={(e) => handleEditProfileChange(e, "bio")}
            />
            <FontAwesomeIcon
              icon={faEdit}
              className="edit-field"
            ></FontAwesomeIcon>
          </div>
        </div>
        <div className="border br-s p-xs edit-bg-color">
          <label className="txt-lt-s" htmlFor="website">
            Website
          </label>
          <div className="relative">
            <input
              id="website"
              className="border-none outline-none w-full edit-bg-color  pr-m"
              type="text"
              value={website}
              onChange={(e) => handleEditProfileChange(e, "website")}
            />
            <FontAwesomeIcon
              icon={faEdit}
              className="edit-field"
            ></FontAwesomeIcon>
          </div>
        </div>
        <div className="flex">
          <button type="submit" className="flex-center btn-save">
            Save
          </button>
        </div>
      </form>
      {/* </div> */}
    </div>,
    document.getElementById("portal")
  );
};

export default EditProfileModal;
