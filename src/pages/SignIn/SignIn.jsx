import { useContext } from "react";
import "./SignIn.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const SignIn = () => {
  const { state, dispatch, signInHandler } = useContext(AuthContext);
  return (
    <div>
      <h1>Tourister</h1>
      <form method="post" onSubmit={signInHandler}>
        <h2>Login</h2>
        <div>
          <label id="username">Username</label>
          <input
            id="username"
            type="text"
            placeholder="Enter Username"
            value={state.signInDetails.username}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_SIGN_IN_DETAILS",
                payload: { key: "username", value: e.target.value },
              })
            }
          />
        </div>
        <div>
          <label id="password">Password</label>
          <input
            id="password"
            type={state.signInDetails.showPassword ? "text" : "password"}
            placeholder="Enter Password"
            value={state.signInDetails.password}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_SIGN_IN_DETAILS",
                payload: { key: "password", value: e.target.value },
              })
            }
          />
          <i
            onClick={() => dispatch({ type: "SIGN_IN_SHOW_HIDE_PASSWORD" })}
            className={`fa ${
              state.signInDetails.showPassword ? "fa-eye" : "fa-eye-slash"
            } `}
          ></i>
        </div>
        <button type="submit" name="signIn">
          Sign in
        </button>
        <button type="submit" name="guestMode">
          Guest Mode
        </button>
        <Link to="/sign-up">
          <p>
            Create An Account{" "}
            <i className="fa fa-solid fa-chevron-up fa-rotate-90"></i>
          </p>
        </Link>
      </form>
    </div>
  );
};

export default SignIn;
