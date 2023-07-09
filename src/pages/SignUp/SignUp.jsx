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
    <div className="flex flex-column flex-center h-full w-full">
      <h2 className="brand-name fw-black  mb-m">Tourist Connect</h2>
      <div className="white-bg br-m p-xxl pt-l pb-l" style={{ width: "30rem" }}>
        <form method="post" onSubmit={newUserSignUpHandler}>
          <h3 className="txt-center mb-s txt-l">Sign Up</h3>
          <div className="flex flex-column">
            <label htmlFor="first-name">Enter First Name</label>
            <input
              id="first-name"
              className="p-xs txt-s br-s mb-s"
              style={{ border: "1px solid grey" }}
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
          <div className="flex flex-column">
            <label htmlFor="last-name">Enter Last Name</label>
            <input
              id="last-name"
              placeholder="Enter Last Name"
              className="p-xs txt-s br-s mb-s"
              style={{ border: "1px solid grey" }}
              value={state.signUpDetails.lastName}
              onChange={(e) =>
                dispatch({
                  type: "UPDATE_SIGN_UP_DETAILS",
                  payload: { key: "lastName", value: e.target.value },
                })
              }
            />
          </div>
          <div className="flex flex-column">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              placeholder="Enter Email Address"
              className="p-xs txt-s br-s mb-s"
              style={{ border: "1px solid grey" }}
              value={state.signUpDetails.email}
              onChange={(e) =>
                dispatch({
                  type: "UPDATE_SIGN_UP_DETAILS",
                  payload: { key: "email", value: e.target.value },
                })
              }
            />
          </div>
          <div className="flex flex-column">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              placeholder="Enter Username"
              className="p-xs txt-s br-s mb-s"
              style={{ border: "1px solid grey" }}
              value={state.signUpDetails.username}
              onChange={(e) =>
                dispatch({
                  type: "UPDATE_SIGN_UP_DETAILS",
                  payload: { key: "username", value: e.target.value },
                })
              }
            />
          </div>
          <div className="flex flex-column relative">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type={state.signUpDetails.showPassword ? "text" : "password"}
              className="p-xs txt-s br-s mb-s"
              style={{ border: "1px solid grey" }}
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
          </div>
          <div className="flex flex-column relative">
            <label htmlFor="confirm-password">Confirm Password </label>
            <input
              id="confirm-password"
              className="p-xs txt-s br-s mb-s"
              style={{ border: "1px solid grey" }}
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
          </div>
          <button
            type="submit"
            name="sign-up"
            className="w-full primary-bg white-color p-s outline-transparent border-none pt-xs pb-xs txt-s mb-s"
          >
            Sign Up
          </button>
          <button
            type="submit"
            name="dummyDetails"
            className="w-full primary-bg white-color p-s outline-transparent border-none pt-xs pb-xs txt-s"
          >
            Fill Dummy Values
          </button>
          <p className="txt-center w-full mt-m" style={{ display: "block" }}>
            Already have an account?
            <Link
              to="/sign-in"
              onClick={() => dispatch({ type: "RESET_SIGN_UP" })}
              className="primary-color p-xs"
            >
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
