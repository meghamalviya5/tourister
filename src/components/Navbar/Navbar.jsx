import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";

import "./Navbar.css";
import "../../style.css";
import { useContext } from "react";
import { AuthContext } from "../..";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { signOutHandler } = useContext(AuthContext);

  return (
    <div className="flex flex-space-between p-s pl-xxl txt-m ml-m">
      <Link to="/">
        <span>Tourist Connect</span>
      </Link>
      <div className="pt-s black-color fw-semibold">
        <Link to="/landing-page" onClick={signOutHandler}>
          <FontAwesomeIcon icon={faSignOut} /> &nbsp;
          <span className="fw-bold">Sign Out</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
