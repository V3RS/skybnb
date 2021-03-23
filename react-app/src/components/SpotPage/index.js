import React from "react";
import "./SpotPage.css";
import { useParams } from "react-router";
import { getOneSpot } from "../../services/spot";

export default function SpotPage() {
  const { spotId } = useParams();

  const spot = getOneSpot(spotId);

  console.log(spot);

  return (
    <div id="spc">
      <div className="spot-page-container">
        <div className="spot-page-title">
          <h1>Spot Page Title {spotId}</h1>
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
