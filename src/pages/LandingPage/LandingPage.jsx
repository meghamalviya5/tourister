import { Link } from "react-router-dom";
import "./LandingPage.css";
import burjKhalifa from "../../assets/burj-khalifa.jpg";

const LandingPage = () => {
  return (
    <div>
      <div className="join-singin">
        <div>
          <h1>Tourister</h1>
          <p>Follow</p>
          <small>Travellers around the world</small>
          <p>Connect</p>
          <small>Withs Fellow companions</small>
          <p>Share</p>
          <small>Your Journey</small>
        </div>
        <Link to="/sign-up">
          <button>Join Now</button>
        </Link>
        <Link to="/sign-in">Already have an account?</Link>
      </div>
      <div className="LandingPage-image">
        <img src={burjKhalifa} alt="" />
      </div>
    </div>
  );
};

export default LandingPage;
