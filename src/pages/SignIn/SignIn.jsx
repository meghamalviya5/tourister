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
            placeholder="Enter Username"
            value={state.username}
            onChange={(e) =>
              dispatch({ type: "SIGN_IN_USERNAME", payload: e.target.value })
            }
          />
        </div>
        <div>
          <label id="password">Password</label>
          <input
            id="password"
            placeholder="Enter Password"
            value={state.password}
            onChange={(e) =>
              dispatch({ type: "SIGN_IN_PASSWORD", payload: e.target.value })
            }
          />
        </div>
        <button>Sign in</button>
        <button>Guest Mode</button>
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
