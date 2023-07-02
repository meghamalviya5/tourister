import { useContext } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import Spinner from "../../components/Spinner/Spinner";

const SignUp = () => {
  const { state, dispatch, newUserSignUpHandler } = useContext(AuthContext);

  console.log("state sign up in signup ---- ", state.signUpDetails);
  return state.isLoaded ? (
    <Spinner />
  ) : (
    <div>
      <h1>Tourister</h1>
      <form method="post" onSubmit={newUserSignUpHandler}>
        <h2>Sign Up</h2>
        {/* <div>
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
        </div> */}
        <div>
          <label id="first-name">First Name</label>
          <input
            id="first-name"
            placeholder="Enter First Name"
            value={state.signUpDetails.firstName}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_SIGN_UP_DETAILS",
                payload: { key: "firstName", value: e.target.value },
              })
            }
          />
        </div>
        <div>
          <label id="last-name">Last Name</label>
          <input
            id="last-name"
            placeholder="Enter Last Name"
            value={state.signUpDetails.lastName}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_SIGN_UP_DETAILS",
                payload: { key: "lastName", value: e.target.value },
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
          <label id="password" className="relative">
            Password
            <input
              id="password"
              type={state.signUpDetails.showPassword ? "text" : "password"}
              placeholder="Enter Password"
              value={state.signUpDetails.password}
              onChange={(e) =>
                dispatch({
                  type: "UPDATE_SIGN_UP_DETAILS",
                  payload: { key: "password", value: e.target.value },
                })
              }
            />
            <i
              onClick={() =>
                dispatch({
                  type: "SIGN_UP_SHOW_HIDE_PASSWORD",
                  payload: {
                    key: "showPassword",
                    value: state.signUpDetails.showPassword,
                  },
                })
              }
              className={`fa ${
                state.signUpDetails.showPassword ? "fa-eye" : "fa-eye-slash"
              } `}
            ></i>
          </label>
        </div>
        <div>
          <label id="confirm-password" className="relative">
            Confirm Password
            <input
              id="confirm-password"
              type={
                state.signUpDetails.showConfirmPassword ? "text" : "password"
              }
              placeholder="Confirm Password"
              value={state.signUpDetails.confirmPassword}
              onChange={(e) =>
                dispatch({
                  type: "UPDATE_SIGN_UP_DETAILS",
                  payload: { key: "confirmPassword", value: e.target.value },
                })
              }
            />
            <i
              onClick={() =>
                dispatch({
                  type: "SIGN_UP_SHOW_HIDE_PASSWORD",
                  payload: {
                    key: "showConfirmPassword",
                    value: state.signUpDetails.showConfirmPassword,
                  },
                })
              }
              className={`fa ${
                state.signUpDetails.showConfirmPassword
                  ? "fa-eye"
                  : "fa-eye-slash"
              } `}
            ></i>
          </label>
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
