import "./SignUp.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div>
      <h1>Tourister</h1>
      <form>
        <h2>Sign Up</h2>
        <div>
          <label id="full-name">Full Name</label>
          <input id="full-name" placeholder="Enter Full Name" />
        </div>
        <div>
          <label id="email">Email Address</label>
          <input id="email" placeholder="Enter Email Address" />
        </div>
        <div>
          <label id="username">Username</label>
          <input id="username" placeholder="Enter Username" />
        </div>
        <div>
          <label id="password">Password</label>
          <input id="password" placeholder="Enter Password" />
        </div>
        <div>
          <label id="confirm-password">Confirm Password</label>
          <input id="confirm-password" placeholder="Confirm Password" />
        </div>
        <button>Sign Up</button>
        <p>
          Already have an account? <Link to="/sign-in">Sign in </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
