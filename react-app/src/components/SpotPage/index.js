import React from "react";
import "./SpotPage.css";

export default function SpotPage() {
  return (
    <div id="spc">
      <div className="spot-page-container">
        <div className="spot-page-title">
          <h1>Spot Page Title</h1>
        </div>
        <div className="spot-secondHeading">
          <h3>Superhost</h3>
          <h3>City, State, Country</h3>
          <div className="spot-shbtns">
            <button>Share</button>
            <button>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}
