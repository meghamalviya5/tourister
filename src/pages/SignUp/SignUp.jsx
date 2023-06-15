import { useContext } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import Spinner from "../../components/Spinner/Spinner";

const SignUp = () => {
  const { state, dispatch, newUserSignUpHandler } = useContext(AuthContext);

  return state.isLoaded ? (
    <Spinner />
  ) : (
    <div>
      <h1>Tourister</h1>
      <form method="post" onSubmit={newUserSignUpHandler}>
        <h2>Sign Up</h2>
        <div>
          <label id="full-name">Full Name</label>
          <input
            id="full-name"
            placeholder="Enter Full Name"
            value={state.signUpDetails.fullName}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_SIGN_UP_DETAILS",
                payload: { key: "fullName", value: e.target.value },
              })
            }
          />
        </div>
        <div>
          <label id="email">Email Address</label>
          <input
            id="email"
            placeholder="Enter Email Address"
            value={state.signUpDetails.email}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_SIGN_UP_DETAILS",
                payload: { key: "email", value: e.target.value },
              })
            }
          />
        </div>
        <div>
          <label id="username">Username</label>
          <input
            id="username"
            placeholder="Enter Username"
            value={state.signUpDetails.username}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_SIGN_UP_DETAILS",
                payload: { key: "username", value: e.target.value },
              })
            }
          />
        </div>
        <div>
          <label id="password">Password</label>
          <input
            id="password"
            placeholder="Enter Password"
            value={state.signUpDetails.password}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_SIGN_UP_DETAILS",
                payload: { key: "password", value: e.target.value },
              })
            }
          />
        </div>
        <div>
          <label id="confirm-password">Confirm Password</label>

          <input
            id="confirm-password"
            placeholder="Confirm Password"
            value={state.signUpDetails.confirmPassword}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_SIGN_UP_DETAILS",
                payload: { key: "confirmPassword", value: e.target.value },
              })
            }
          />
        </div>
        <button type="submit" name="sign-up">
          Sign Up
        </button>
        <button type="submit" name="dummyDetails">
          Fill Dummy Values
        </button>
        <p>
          Already have an account?
          <Link
            to="/sign-in"
            onClick={() => dispatch({ type: "RESET_SIGN_UP" })}
          >
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
