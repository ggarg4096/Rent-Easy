import React from "react";
import "./overview.css";
import hideenfee from "./overview-img/hidden fees.svg";
import trust from "./overview-img/trusted.svg";
import hasslefree from "./overview-img/calmness.svg";
const OverviewPage = () => {
  return (
    <div className="overview-container">
      <div className="overview-item odd">
        <div className="content">
          <img src={hideenfee} alt="Image 1" className="overview-img" />
          <div className="text">
            <h2>No hidden fee</h2>
            <p>
              No need to worry about any hidden fee, we know how awful it's out
              there
            </p>
          </div>
        </div>
      </div>

      {/* Second div */}
      <div className="overview-item even">
        <div className="content">
          <img src={trust} alt="Image 2" className="overview-img" />
          <div className="text">
            <h2>Trusted by thousands!</h2>
            <p>When it's about trust, we got your back!</p>
          </div>
        </div>
      </div>

      {/* Third div */}
      <div className="overview-item odd">
        <div className="content">
          <img src={hasslefree} alt="Image 3" className="overview-img" />
          <div className="text">
            <h2>Book your ride hassle free</h2>
            <p>And we will handle everything!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewPage;
