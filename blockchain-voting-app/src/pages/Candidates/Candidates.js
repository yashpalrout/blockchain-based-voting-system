import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./candidates.css";

const Candidates = () => {
  const navigate = useNavigate();

  return (
    <div className="group-root">
      <div className="rectangle-parent19">
        <div className="group-child50" />
        <b className="election-name9">Election name</b>
        <div className="politician-indian-high-qu-container">
          <img
            className="politician-indian-high-qu2"
            alt=""
            src="/politician-indian---high-quality-photography-portrait-of-a-person-centered@2x.png"
          />
          <div className="shaveen-deo-bjd-container1">
            <p className="shaveen-deo1">Shaveen Deo</p>
            <p className="bjd1">BJD</p>
          </div>
        </div>
        <div className="politician-indian-high-quali-group">
          <img
            className="politician-indian-high-qu2"
            alt=""
            src="/politician-indian--high-quality-photography-portrait-of-a-person-centered@2x.png"
          />
          <div className="shaveen-deo-bjd-container1">
            <p className="shaveen-deo1">Sandeep Sinha</p>
            <p className="bjd1">Congress</p>
          </div>
        </div>
        <div className="politician-indian-different-re-group">
          <img
            className="politician-indian-high-qu2"
            alt=""
            src="/politician-indian-different-religion--high-quality-photography-portrait-of-a-person-centered@2x.png"
          />
          <div className="shaveen-deo-bjd-container1">
            <p className="shaveen-deo1">Yogi Ashirvad</p>
            <p className="bjd1">BJP</p>
          </div>
        </div>
        <div className="politician-indian-female-hig-group">
          <img
            className="politician-indian-high-qu2"
            alt=""
            src="/politician-indian-female--high-quality-photography-portrait-of-a-person-centered@2x.png"
          />
          <div className="shaveen-deo-bjd-container1">
            <p className="shaveen-deo1">Sasmita Rani</p>
            <p className="bjd1">AAP</p>
          </div>
        </div>
        <div className="consti-1-container">
          <div className="consti-12">Consti. 1</div>
          <div className="group-child51" />
          <img className="vector-icon6" alt="" src="/vector.svg" />
        </div>
        <div className="group-parent15">
          <div className="politician-indian-high-quali-container">
            <img
              className="politician-indian-high-quali3"
              alt=""
              src="/politician-indian--high-quality-photography-portrait-of-a-person-centered@2x.png"
            />
            <div className="shaveen-deo-bjd-container1">
              <p className="shaveen-deo1">Surendra Modi</p>
              <p className="bjd1">BJP</p>
            </div>
          </div>
          <div className="politician-indian-female-hig-container">
            <img
              className="politician-indian-high-qu2"
              alt=""
              src="/politician-indian-female--high-quality-photography-portrait-of-a-person-centered@2x.png"
            />
            <div className="shaveen-deo-bjd-container1">
              <p className="shaveen-deo1">Jasdeep Kaur</p>
              <p className="bjd1">AAP</p>
            </div>
          </div>
          <div className="politician-indian-different-re-container">
            <img
              className="politician-indian-high-qu2"
              alt=""
              src="/politician-indian-different-religion--high-quality-photography-portrait-of-a-person-centered@2x.png"
            />
            <div className="shaveen-deo-bjd-container1">
              <p className="shaveen-deo1">Rajeev Agrawal</p>
              <p className="bjd1">Congress</p>
            </div>
          </div>
          <div className="politician-indian-high-qu-parent1">
            <img
              className="politician-indian-high-quali3"
              alt=""
              src="/politician-indian---high-quality-photography-portrait-of-a-person-centered@2x.png"
            />
            <div className="shaveen-deo-bjd-container1">
              <p className="shaveen-deo1">Bhalu Pratap</p>
              <p className="bjd1">ATP</p>
            </div>
          </div>
          {/* <div className="edit">Edit</div> */}
        </div>
      </div>
    </div>
  );
};

export default Candidates;
