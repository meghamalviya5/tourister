import { Link } from "react-router-dom";
import "./LandingPage.css";
import burjKhalifa from "../../assets/burj-khalifa.jpg";

const LandingPage = () => {
  return (
    <div>
      <div className="flex flex-row flex-center h-full w-full landing-page">
        <div className="flex flex-column flex-space-between landing-page-box">
          <h2 className="brand-name txt-gt-l">Tourist Connect</h2>
          <div className="flex flex-column" style={{ gap: "1.2rem" }}>
            <h2 className="txt-gt-xs">
              <span className="txt-l primary-light-color">Follow</span>
              Travellers around the world
            </h2>
            <h2 className="txt-gt-xs">
              <span className="txt-l primary-light-color">Connect</span>With
              Fellow companions
            </h2>
            <h2 className="txt-gt-xs">
              <span className="txt-l primary-light-color">Share</span>Your
              Journey & Experience
            </h2>
          </div>
          <Link to="/sign-up">
            <div>
              <button className="primary-bg w-full p-s secondary-color border-none outline-none txt-s">
                Join Now
              </button>
            </div>
            <Link to="/sign-in">
              <p className="primary-color txt-s txt-center mt-xs">
                Already have an account?
              </p>
            </Link>
          </Link>
        </div>
        <div className="">
          <img
            src={burjKhalifa}
            alt="landing-page"
            style={{ height: "85vh", width: "30rem" }}
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
