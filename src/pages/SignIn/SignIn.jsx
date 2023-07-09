import { useContext } from "react";
import "./SignIn.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import Spinner from "../../components/Spinner/Spinner";

const SignIn = () => {
  const { state, dispatch, signInHandler } = useContext(AuthContext);
  return state.isLoaded ? (
    <Spinner />
  ) : (
    <div className="flex flex-column flex-center h-full w-full">
      <h2 className="brand-name fw-black txt-xl mb-m">Tourist Connect</h2>
      <div
        className="white-bg br-m p-xxl pt-xl pb-xl"
        style={{ width: "30rem" }}
      >
        <form method="post" onSubmit={signInHandler}>
          <h3 className="txt-center mb-m txt-l">Login</h3>
          <div className="flex flex-column">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              className="p-xs txt-s br-s mb-s"
              style={{ border: "1px solid grey" }}
              placeholder="Enter your username"
              value={state.signInDetails.username}
              onChange={(e) =>
                dispatch({
                  type: "UPDATE_SIGN_IN_DETAILS",
                  payload: { key: "username", value: e.target.value },
                })
              }
            />
          </div>
          <div className="flex flex-column relative">
            <label htmlFor="password" className="">
              Password
            </label>
            <input
              id="password"
              className="p-xs txt-s flex mb-s items-center"
              type={state.signInDetails.showPassword ? "text" : "password"}
              placeholder="Enter your password"
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
          <button
            type="submit"
            name="signIn"
            className="w-full primary-bg white-color p-s outline-transparent border-none pt-xs pb-xs txt-s mb-s"
          >
            Sign in
          </button>
          <button
            type="submit"
            name="guestMode"
            className="w-full primary-bg white-color p-s outline-transparent border-none pt-xs pb-xs txt-s"
            style={{ display: "block" }}
          >
            Guest Mode
          </button>
          <Link to="/sign-up">
            <p className="txt-center w-full mt-m">
              Create An Account{" "}
              <i className="fa fa-solid fa-chevron-up fa-rotate-90"></i>
            </p>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
