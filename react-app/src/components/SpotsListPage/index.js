import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./SpotsListPage.css";

export default function SpotsListPage() {
  return (
    <div className="spotslistpage-container">
      <div className="spotslistpage-spotslist-container">
        <h3>Spotslistpage left</h3>
      </div>
      <div className="spotslistpage-map-container">
        <h3>Googlemaps here</h3>
      </div>
    </div>
  );
}
