import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./SpotsListPage.css";

import MapContainer from "./MapContainer";
import SpotsListEle from "./SpotsListEle";

export default function SpotsListPage() {
  const dispatch = useDispatch();
  const handleTestQuery = () => {};
  return (
    <div className="spotslistpage-container">
      <div className="spotslistpage-spotslist-container">
        <div className="spotslist-header">
          <div className="spotslist-info">
            <p>Search meta-data here</p>
            <h2>Search Criteria Display - e.g. Unique Stay</h2>
          </div>
          <div className="spotslistpage-filter-btn-container">
            <button className="spotslistpage-filter-btn">
              Cancellation flexibility
            </button>
            <button className="spotslistpage-filter-btn">Entire place</button>
            <button className="spotslistpage-filter-btn">Price</button>
            <button className="spotslistpage-filter-btn">More filters</button>
          </div>
        </div>
        <SpotsListEle
          img="https://images.pexels.com/photos/584399/living-room-couch-interior-room-584399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          location_desc="Somewhere in a galaxy far far away"
          title="Modernly decorated room"
          description="4 guests · 1 bedroom · 2 beds · 1 bath"
          star={4.5}
          price={42}
          total={126}
        />
      </div>

      <div className="spotslistpage-map-container">
        <h3>Googlemaps here</h3>
        <button onClick={handleTestQuery}>Test Query</button>
        <MapContainer />
      </div>
    </div>
  );
}
